import { FastifyReply, FastifyRequest } from "fastify";
import { mapBulkImportToRawData } from "../helpers/mapper.js";
import { BulkImport, RawLumaData } from "../helpers/types.js";
import { supabase } from "../integrations/supabase/supabase.js";
import * as XLSX from "xlsx";
import { writeProgressResponse, writeRawResponse } from "../helpers/utils.js";

async function getFileBuffer(filePath: string) {
  const { data, error } = await supabase.storage
    .from("file-storage")
    .download(filePath);
  if (error) return null;
  return data.arrayBuffer();
}

const BATCH_SIZE = 5000;

async function insertInBatchesWithTimedProgress(
  rep: FastifyReply,
  initialProgress: number,
  data: RawLumaData[],
  batchSize = BATCH_SIZE
) {
  const results = [];
  let progress = initialProgress;
  const totalBatches = Math.ceil(data.length / batchSize);
  const progressPerBatch = (100 - initialProgress) / totalBatches;
  
  for (let i = 0; i < data.length; i += batchSize) {
    const batch = data.slice(i, i + batchSize);
    const batchNumber = i / batchSize + 1;
    const batchStartProgress = progress;
    const batchMaxProgress = batchStartProgress + progressPerBatch;
    
    // Calculate timing for this batch
    const estimatedBatchDuration = batch.length * 5; // 5ms per record
    const actualBatchDuration = Math.max(500, Math.min(estimatedBatchDuration, 10000)); // Min 500ms, Max 10s
    const updateInterval = 200; // Update every 200ms
    const batchProgressIncrement = progressPerBatch / (actualBatchDuration / updateInterval);
    
    // Start timed progress for this batch
    let currentBatchProgress = batchStartProgress;
    const batchProgressInterval = setInterval(() => {
      currentBatchProgress = Math.min(
        currentBatchProgress + batchProgressIncrement, 
        batchMaxProgress - 1 // Leave 1% for completion
      );
      writeProgressResponse(rep, Math.floor(currentBatchProgress), {
        message: `Processing batch ${batchNumber}/${totalBatches} (${batch.length} records)...`,
      });
    }, updateInterval);

    try {
      // Perform the actual insert
      const { error } = await supabase.from("raw_luma_data").insert(batch);

      // Clear the interval
      clearInterval(batchProgressInterval);

      if (error) {
        console.error(`Error in batch ${batchNumber}:`, error);
        writeProgressResponse(rep, batchStartProgress, {
          message: `Failed at batch ${batchNumber}: ${error.message}`,
        });
        throw error;
      }

      // Set final progress for this batch
      progress = batchMaxProgress;
      writeProgressResponse(rep, Math.floor(progress), {
        message: `Completed batch ${batchNumber}/${totalBatches}`,
      });

      results.push({ batch: batchNumber, count: batch.length });
      console.log(`Inserted batch ${batchNumber}/${totalBatches}`);

      // Timeout between batches (except for the last batch)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 500ms pause between batches
    } catch (error) {
      clearInterval(batchProgressInterval);
      throw error;
    }
  }
  
  writeProgressResponse(rep, Math.floor(progress), { 
    message: "Finalizing Import" 
  });
  
  return results;
}

async function insertWithTimedProgress(
  rep: FastifyReply,
  initialProgress: number,
  data: RawLumaData[]
) {
  let progress = initialProgress;
  const targetProgress = 100;
  const remainingProgress = 100 - initialProgress;

  // Calculate duration based on 7ms per record
  const estimatedDuration = data.length * 5; // 7ms per record
  const totalDuration = Math.max(1000, Math.min(estimatedDuration, 30000)); // Min 1s, Max 30s

  const updateInterval = 300; // Update every 300ms for smoother animation
  const progressIncrement =
    remainingProgress / (totalDuration / updateInterval);

  // Start the progress animation
  const progressInterval = setInterval(() => {
    progress = Math.min(progress + progressIncrement, targetProgress - 1);
    if (progress < 100) writeProgressResponse(rep, Math.floor(progress));
  }, updateInterval);

  const { error } = await supabase.from("raw_luma_data").insert(data);
  if (error) {
    console.error(`Error while inserting data`, error);
    writeRawResponse(rep, false, error.message);
  }
  clearInterval(progressInterval);
  writeProgressResponse(rep, 100, { message: "Finalizing Import" });
}

async function insertAllWithProgress(
  rep: FastifyReply,
  initialProgress: number,
  data: RawLumaData[]
) {
  const shouldUseBatching = data.length > BATCH_SIZE;
  
  if (shouldUseBatching) {
    // Use batch processing for large datasets
    return insertInBatchesWithTimedProgress(rep, initialProgress, data);
  } else {
    // Use timed progress for smaller datasets
    return insertWithTimedProgress(rep, initialProgress, data);
  }
}

export async function handleLumaDataUpload(
  req: FastifyRequest,
  rep: FastifyReply,
  filePath: string
) {
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
      writeRawResponse(rep, false, "Error truncating raw luma data");
      rep.raw.end();
      return;
    }
    let fileBuffer = await getFileBuffer(filePath);

    progress += 10;
    writeProgressResponse(rep, progress, { message: "Parsing Excel File" });

    if (!fileBuffer) {
      writeRawResponse(rep, false, "File not found");
      rep.raw.end();
      return;
    }
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

    await insertAllWithProgress(rep, progress, mappedData);
    rep.raw.end();
  } catch (error: any) {
    console.error("Error processing request:", JSON.stringify(error));
    if(!rep.raw.writableEnded){
      writeRawResponse(rep, false, error?.message || "Unknown error");
      rep.raw.end();
    }
  }
}
