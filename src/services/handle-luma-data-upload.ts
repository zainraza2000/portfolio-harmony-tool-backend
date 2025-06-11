import { FastifyReply, FastifyRequest } from "fastify";
import { mapBulkImportToRawData } from "../helpers/mapper.js";
import { ApiResponse, BulkImport, RawLumaData } from "../helpers/types.js";
import { supabase } from "../integrations/supabase/supabase.js";
import * as XLSX from "xlsx";
import { writeProgressResponse } from "../helpers/utils.js";

async function getFileBuffer(filePath: string) {
  const { data, error } = await supabase.storage
    .from("file-storage")
    .download(filePath);
  if (error) return null;
  return data.arrayBuffer();
}

const BATCH_SIZE = 10000;

async function insertInBatchesWithProgress(
  rep: FastifyReply,
  initialProgress: number,
  data: RawLumaData[],
  batchSize = BATCH_SIZE
) {
  const results = [];
  let progress = initialProgress
  for (let i = 0; i < data.length; i += batchSize) {
    const batch = data.slice(i, i + batchSize);

    const { error } = await supabase.from("raw_luma_data").insert(batch);

    if (error) {
      console.error(`Error in batch ${i / batchSize + 1}:`, error);
      throw error;
    }

    progress += (batchSize / data.length) * (100 - initialProgress);
    writeProgressResponse(rep, progress, {
      message: `Inserted batch ${i / batchSize + 1}/${Math.ceil(data.length / batchSize)}`,
    });
    
    results.push({ batch: i / batchSize + 1, count: batch.length });
    console.log(
      `Inserted batch ${i / batchSize + 1}/${Math.ceil(data.length / batchSize)}`
    );
  }
  writeProgressResponse(rep, progress, { message: "Finalizing Import" });
  return results;
}

export async function handleLumaDataUpload(
  req: FastifyRequest,
  rep: FastifyReply,
  filePath: string
): Promise<ApiResponse> {
  try {
    let progress = 0;
    writeProgressResponse(rep, progress, {
      message: "Truncating existing data",
    });

    const { error: truncateError } = await supabase.rpc(
      "truncate_raw_luma_data"
    );

    progress = 10;
    writeProgressResponse(rep, progress, {
      message: "Retrieving File From Storage",
    });

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

    progress += 10;
    writeProgressResponse(rep, progress, { message: "Parsing Excel File" });

    if (!fileBuffer) return { success: false, message: "File not found" };
    const workbook = XLSX.read(fileBuffer, { type: "array" });
    fileBuffer = null;
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData: BulkImport[] = XLSX.utils.sheet_to_json(worksheet);

    progress += 10;
    writeProgressResponse(rep, progress, {
      message: "Mapping Fields with Database Fields",
    });

    const mappedData = mapBulkImportToRawData(jsonData);

    progress += 10;
    writeProgressResponse(rep, progress, {
      message: "Inserting data into Database",
    });

    await insertInBatchesWithProgress(rep, progress, mappedData);
    rep.raw.end();
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
