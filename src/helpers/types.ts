import { Database } from "../integrations/supabase/database.types.js";

export type RawLumaData = Database["public"]["Tables"]["raw_luma_data"]["Row"];

export type BulkImport = RawLumaData & {
  ["Rep Name"]?: string;
  ["Mark To Market Value"]?: string;
  ["Total Holdings"]?: string;
  ["Investor Holdings"]?: string;
  ["Initial Investment (USD)"]?: string;
  ["Total Notional (USD)"]?: string;
};
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  code?: number;
  data?: T;
}
