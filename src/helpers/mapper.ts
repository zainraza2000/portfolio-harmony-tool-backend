// mapper.ts
import { getFieldMappings } from "services/handle-field-mappings.js";
import { BulkImport, RawLumaData } from "./types.js";
import { omitKeys } from "./utils.js";
import { getDefaultValues } from "services/handle-default-values.js";

export async function mapBulkImportToRawData(
  importData: BulkImport[]
): Promise<RawLumaData[]> {
  // Get field mappings from database
  const [fieldMappings, defaultValues] = await Promise.all([
    getFieldMappings(),
    getDefaultValues(),
  ]);
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
          result[rawLumaDataKey] = item[field] ?? null;
        }
      }
    });
    UNIQUE_BULK_IMPORT_FIELDS.forEach((field: keyof BulkImport) => {
      const rawLumaDataKey = fieldMappings[field] as
        | keyof RawLumaData
        | undefined;
      const dv = defaultValues.find(
        (dv) => dv.data_field === rawLumaDataKey
      );
      if (rawLumaDataKey && !result[rawLumaDataKey] && dv?.default_value) {
        result[rawLumaDataKey] = dv?.default_value;
      }
    });
    return result;
  });
}
