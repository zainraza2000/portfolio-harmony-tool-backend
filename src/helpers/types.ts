import { Database } from "integrations/supabase/database.types";

export type BulkImport = Omit<
  Database["public"]["Tables"]["raw_luma_data"]["Row"],
  | "Advisor"
  | "Mark To Market Price"
  | "Investor Holding"
  | "Current Notional (USD)"
> & {
  ["Rep Name"]: string;
  ["Mark To Market Value"]: string;
  ["Total Holdings"]: string;
  ["Investor Holdings"]: string;
  ["Initial Investment (USD)"]: string;
  ["Total Notional (USD)"]: string;
};

export type RawLumaData = Database["public"]["Tables"]["raw_luma_data"]["Row"];

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  code?: number;
  data?: T;
}
