import { Type } from "@sinclair/typebox";

export const DeleteFieldMappingParams = Type.Object({
  fileField: Type.String(),
});

export const DeleteFieldMappingResponse = Type.Object({
  success: Type.Boolean(),
  message: Type.String(),
});