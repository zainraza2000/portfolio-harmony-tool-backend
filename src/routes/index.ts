import { Type, Static } from "@sinclair/typebox";
import { FastifyPluginAsync } from "fastify";
import { buildResponse } from "helpers/utils";
import { HandleLumaDataUpload } from "schemas/handle-luma-data";
import { handleLumaDataUpload } from "services/handle-luma-data-upload";

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
      const body = req.body as Static<typeof HandleLumaDataUpload>;
      const serviceRes = await handleLumaDataUpload(body.filePath);
      return buildResponse(rep, serviceRes);
    }
  );
};

export default routes;
