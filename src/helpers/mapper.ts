import { BulkImport, RawLumaData } from "./types.js";
import { omitKeys } from "./utils.js";

const FIELD_MAPPINGS: Partial<Record<keyof BulkImport, keyof RawLumaData>> = {
  "Rep Name": "Advisor",
  "Mark To Market Value": "Mark To Market Price",
  "Total Holdings": "Investor Holding", // Not mapped
  "Investor Holdings": "Investor Holding",
  "Initial Investment (USD)": "Current Notional (USD)", // Not mapped
  "Total Notional (USD)": "Current Notional (USD)",
} as const;

const UNIQUE_BULK_IMPORT_FIELDS = [
  "Rep Name",
  "Mark To Market Value",
  "Total Holdings",
  "Investor Holdings",
  "Initial Investment (USD)",
  "Total Notional (USD)",
] as const;
// Default values for required fields
const DEFAULT_VALUES: Pick<
  RawLumaData,
  "Current Notional (USD)" | "Investor Holding" | "Mark To Market Price"
> = {
  "Current Notional (USD)": "0",
  "Investor Holding": "0",
  "Mark To Market Price": "1",
} as const;

export function mapBulkImportToRawData(
  importData: BulkImport[]
): RawLumaData[] {
  return importData.map((item): RawLumaData => {
    // Initialize result with default values

    const result: any = {
      ...omitKeys(item, [
        "Rep Name",
        "Mark To Market Value",
        "Total Holdings",
        "Investor Holdings",
        "Initial Investment (USD)",
        "Total Notional (USD)",
      ]),
    };
    UNIQUE_BULK_IMPORT_FIELDS.map((field: keyof BulkImport) => {
      const rawLumaDataKey = FIELD_MAPPINGS[field];
      if (rawLumaDataKey && !result[rawLumaDataKey]) {
        if (item[rawLumaDataKey]) {
          result[rawLumaDataKey] = item[rawLumaDataKey];
        } else {
          result[rawLumaDataKey] = item[field]
            ? item[field]
            : ((DEFAULT_VALUES as any)[rawLumaDataKey] ?? null);
        }
      }
    });
    
    // Log warnings for missing critical data (only if using defaults)
    // if (!item["Total Notional (USD)"]) {
    //   console.warn(
    //     `No notional value found for ${
    //       result.Advisor || "unknown advisor"
    //     }, using default: ${DEFAULT_VALUES["Current Notional (USD)"]}`
    //   );
    // }

    // if (!item["Investor Holdings"]) {
    //   console.warn(
    //     `No investor holding found for ${
    //       result.Advisor || "unknown advisor"
    //     }, using default: ${DEFAULT_VALUES["Investor Holding"]}`
    //   );
    // }

    // if (!item["Mark To Market Value"]) {
    //   console.warn(
    //     `No Mark To Market Price found for ${
    //       result.Advisor || "unknown advisor"
    //     }, using default: ${DEFAULT_VALUES["Mark To Market Price"]}`
    //   );
    // }

    return result;
  });
}