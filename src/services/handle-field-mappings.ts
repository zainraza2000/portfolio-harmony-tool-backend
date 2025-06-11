import { supabase } from "../integrations/supabase/supabase.js";
import { ApiResponse } from "../helpers/types.js";

export async function deleteFieldMapping(fileField: string): Promise<ApiResponse> {
  try {
    const { error } = await supabase
      .from("import_field_mappings")
      .delete()
      .eq("file_field", fileField);

    if (error) {
      console.error("Supabase delete error:", error);
      return {
        success: false,
        message: "Failed to delete mapping from database",
      };
    }

    return {
      success: true,
      message: "Mapping deleted successfully",
    };
  } catch (error: any) {
    console.error("Error in deleteFieldMapping:", error);
    return {
      success: false,
      message: error?.message || "Unknown error occurred",
    };
  }
}