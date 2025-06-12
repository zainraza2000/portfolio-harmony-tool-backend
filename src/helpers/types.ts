import { Database } from "../integrations/supabase/database.types.js";

export type RawLumaData = Database["public"]["Tables"]["raw_luma_data"]["Row"];

export type BulkImport = RawLumaData & Record<string, string | undefined>;

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  code?: number;
  data?: T;
}

