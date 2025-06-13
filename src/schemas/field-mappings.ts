import { Type as T } from "@sinclair/typebox";

export const DeleteFieldMappingParams = T.Object({
  fileField: T.String(),
});

export const DeleteFieldMappingResponse = T.Object({
  success: T.Boolean(),
  message: T.String(),
});

export const CreateFieldMappingBody = T.Object({
  fileField: T.String(),
  dataField: T.String(),
});

export const CreateFieldMappingResponse = T.Object({
  success: T.Boolean(),
  message: T.Optional(T.String()),
});
