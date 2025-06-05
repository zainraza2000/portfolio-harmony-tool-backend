import fastify from "fastify";
import config from "./plugins/config.js";
import routes from "./routes/index.js";
import cors from "@fastify/cors";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { apiKeyMiddleware } from "./middleware/api-key.js";

const server = fastify({
  ajv: {
    customOptions: {
      removeAdditional: "all",
      coerceTypes: true,
      useDefaults: true,
    },
  },
  logger: {
    level: process.env.LOG_LEVEL,
  },
}).withTypeProvider<TypeBoxTypeProvider>();

await server.register(cors, {
  origin: process.env.FRONTEND_BASE_URL || "http://localhost:8080", // or true for all origins
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: "*",
});
await server.register(config);
await server.register(routes);
server.addHook("preHandler", apiKeyMiddleware);
await server.ready();

export default server;
