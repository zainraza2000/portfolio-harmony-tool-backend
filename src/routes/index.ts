import { Type, Static } from "@sinclair/typebox";
import { FastifyPluginAsync } from "fastify";
import { buildResponse } from "../helpers/utils.js";
import { HandleLumaDataUpload } from "../schemas/handle-luma-data.js";
import { handleLumaDataUpload } from "../services/handle-luma-data-upload.js";
import {
  CreateFieldMappingBody,
  CreateFieldMappingResponse,
  DeleteFieldMappingParams,
  DeleteFieldMappingResponse,
} from "schemas/field-mappings.js";
import {
  createFieldMapping,
  deleteFieldMapping,
} from "services/handle-field-mappings.js";

const routes: FastifyPluginAsync = async (server) => {
  server.get(
    "/",
    {
      schema: {
        response: {
          200: Type.Object({
            hello: Type.String(),
          }),
        },
      },
    },
    async function () {
      return { hello: "world" };
    }
  );
  server.post(
    "/handle-luma-data-upload",
    { schema: { body: HandleLumaDataUpload } },
    async function (req, rep) {
      rep.raw.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Cache-Control",
      });
      const body = req.body as Static<typeof HandleLumaDataUpload>;
      const serviceRes = await handleLumaDataUpload(req, rep, body.filePath);
    }
  );

  //field mappings
  server.delete(
    "/field-mappings/:fileField",
    {
      schema: {
        params: DeleteFieldMappingParams,
        response: {
          200: DeleteFieldMappingResponse,
          400: Type.Object({ error: Type.String() }),
          500: Type.Object({ error: Type.String() }),
        },
      },
      config: {
        bodyLimit: 0,
        parseAs: "string",
      },
    },
    async function (req, rep) {
      const { fileField } = req.params as { fileField: string };
      const serviceRes = await deleteFieldMapping(fileField);
      return buildResponse(rep, serviceRes);
    }
  );

  server.post(
    "/field-mappings",
    {
      schema: {
        body: CreateFieldMappingBody,
        response: {
          200: CreateFieldMappingResponse,
          400: Type.Object({ error: Type.String() }),
          500: Type.Object({ error: Type.String() }),
        },
      },
    },
    async function (req, rep) {
      const { fileField, dataField, defaultValue } = req.body as Static<
        typeof CreateFieldMappingBody
      >;
      const serviceRes = await createFieldMapping(
        fileField,
        dataField,
        defaultValue
      );
      return buildResponse(rep, serviceRes);
    }
  );
};

export default routes;
