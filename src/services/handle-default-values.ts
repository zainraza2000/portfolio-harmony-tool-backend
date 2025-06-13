import { ApiResponse } from "helpers/types";
import { supabase } from "integrations/supabase/supabase";

export async function getDefaultValues() {
  const { data, error } = await supabase
    .from("import_default_values")
    .select("default_value,data_field");

  if (error) {
    console.error("Error fetching field mappings:", error);
    throw error;
  }

  return data;
}

export async function createDefaultValues(
  defaultValue: string,
  dataField: string
): Promise<ApiResponse> {
  try {
    const { error } = await supabase.from("import_default_values").insert([
      {
        default_value: defaultValue,
        data_field: dataField,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return {
        success: false,
        message: "Failed to insert default value into database",
      };
    }
    return { success: true, message: "default value created successfully" };
  } catch (err: any) {
    console.error("Error in default value:", err);
    return {
      success: false,
      message: err?.message || "Unknown error occurred",
    };
  }
}

export async function deleteDefaultValues(
  defaultValue: string
): Promise<ApiResponse> {
  try {
    const { error } = await supabase
      .from("import_default_values")
      .delete()
      .eq("data_field", defaultValue);

    if (error) {
      console.error("Supabase delete error:", error);
      return {
        success: false,
        message: "Failed to delete mapping from database",
      };
    }

    return {
      success: true,
      message: "value deleted successfully",
    };
  } catch (error: any) {
    console.error("Error in deleteValue:", error);
    return {
      success: false,
      message: error?.message || "Unknown error occurred",
    };
  }
}
