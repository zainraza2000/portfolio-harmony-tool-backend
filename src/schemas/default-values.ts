import { Type as T } from "@sinclair/typebox";

export const DeleteDefaultValuesParams = T.Object({
  defaultValue: T.String(),
});

export const DeleteDefaultValuesResponse = T.Object({
  success: T.Boolean(),
  message: T.String(),
});

export const CreateDefaultValuesBody = T.Object({
  defaultValue: T.String(),
  dataField: T.String(),
});

export const CreateDefaultValuesResponse = T.Object({
  success: T.Boolean(),
  message: T.Optional(T.String()),
});
