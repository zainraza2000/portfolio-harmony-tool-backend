// mapper.ts
import { getFieldMappings } from "services/handle-field-mappings.js";
import { BulkImport, RawLumaData } from "./types.js";
import { omitKeys } from "./utils.js";

export async function mapBulkImportToRawData(
  importData: BulkImport[]
): Promise<RawLumaData[]> {
  // Get field mappings from database
  const { fieldMappings, defaultValues } = await getFieldMappings();
  const UNIQUE_BULK_IMPORT_FIELDS = Object.keys(fieldMappings) as Array<
    keyof BulkImport
  >;
  return importData.map((item): RawLumaData => {
    const result: any = {
      ...omitKeys(item, UNIQUE_BULK_IMPORT_FIELDS),
    };

    UNIQUE_BULK_IMPORT_FIELDS.forEach((field: keyof BulkImport) => {
      const rawLumaDataKey = fieldMappings[field] as
        | keyof RawLumaData
        | undefined;
      if (rawLumaDataKey && !result[rawLumaDataKey]) {
        if (item[rawLumaDataKey]) {
          result[rawLumaDataKey] = item[rawLumaDataKey];
        } else {
          result[rawLumaDataKey] = item[field]
            ? item[field]
            : (defaultValues[rawLumaDataKey] ?? null);
        }
      }
    });
    return result;
  });
}
