import { mapBulkImportToRawData } from "../helpers/mapper.js";
import { ApiResponse, BulkImport, RawLumaData } from "../helpers/types.js";
import { supabase } from "../integrations/supabase/supabase.js";
import * as XLSX from "xlsx";

async function getFileBuffer(filePath: string) {
  const { data, error } = await supabase.storage
    .from("file-storage")
    .download(filePath);
  if (error) return null;
  return data.arrayBuffer();
}

const BATCH_SIZE = 1000;

async function insertInBatches(data: RawLumaData[], batchSize = BATCH_SIZE) {
  const results = [];

  for (let i = 0; i < data.length; i += batchSize) {
    const batch = data.slice(i, i + batchSize);

    const { error } = await supabase.from("raw_luma_data").insert(batch);

    if (error) {
      console.error(`Error in batch ${i / batchSize + 1}:`, error);
      throw error;
    }

    results.push({ batch: i / batchSize + 1, count: batch.length });
    console.log(
      `Inserted batch ${i / batchSize + 1}/${Math.ceil(data.length / batchSize)}`
    );
  }

  return results;
}

export async function handleLumaDataUpload(
  filePath: string
): Promise<ApiResponse> {
  try {
    const { error: truncateError } = await supabase.rpc(
      "truncate_raw_luma_data"
    );
    if (truncateError) {
      console.log(
        `Error truncating raw luma data. ${JSON.stringify(truncateError)}`
      );
      return {
        success: false,
        message: `Error truncating raw luma data`,
      };
    }
    let fileBuffer = await getFileBuffer(filePath);
    if (!fileBuffer) return { success: false, message: "File not found" };
    const workbook = XLSX.read(fileBuffer, { type: "array" });
    fileBuffer = null;
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData: BulkImport[] = XLSX.utils.sheet_to_json(worksheet);
    const mappedData = mapBulkImportToRawData(jsonData);

    await insertInBatches(mappedData);
    const { error } = await supabase.rpc("process_raw_luma_update_batch");
    if (error) {
      console.log(
        `Inserted records but failed to process them. ${JSON.stringify(error)}`
      );
      return {
        success: true,
        message: `Inserted records but failed to process them. ${JSON.stringify(error)}`,
      };
    }
    return {
      success: true,
      message: `Successfully processed records`,
    };
  } catch (error: any) {
    console.error("Error processing request:", JSON.stringify(error));
    return {
      success: false,
      message: error?.message || "Unknown error",
    };
  }
}
