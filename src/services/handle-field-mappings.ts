import { supabase } from "integrations/supabase/supabase.js";
import { ApiResponse } from "../helpers/types.js";

export async function getFieldMappings() {
  const { data, error } = await supabase
    .from("import_field_mappings")
    .select("file_field, data_field");

  if (error) {
    console.error("Error fetching field mappings:", error);
    throw error;
  }

const fieldMappings: Record<string, string> = {};

data.forEach((mapping) => {
  if (mapping.file_field && mapping.data_field) {
    fieldMappings[mapping.file_field] = mapping.data_field;
  }
});

 

  return fieldMappings;
}

export async function createFieldMapping(
  fileField: string,
  dataField: string
): Promise<ApiResponse> {
  try {
    const { error } = await supabase.from("import_field_mappings").insert([
      {
        file_field: fileField,
        data_field: dataField,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return {
        success: false,
        message: "Failed to insert mapping into database",
      };
    }
    return { success: true, message: "Mapping created successfully" };
  } catch (err: any) {
    console.error("Error in createFieldMapping:", err);
    return {
      success: false,
      message: err?.message || "Unknown error occurred",
    };
  }
}

export async function deleteFieldMapping(
  fileField: string
): Promise<ApiResponse> {
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
