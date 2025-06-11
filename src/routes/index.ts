import { Type, Static } from "@sinclair/typebox";
import { FastifyPluginAsync } from "fastify";
import { buildResponse } from "../helpers/utils.js";
import { HandleLumaDataUpload } from "../schemas/handle-luma-data.js";
import { handleLumaDataUpload } from "../services/handle-luma-data-upload.js";

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
};

export default routes;
