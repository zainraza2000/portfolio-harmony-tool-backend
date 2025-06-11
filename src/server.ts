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

server.addContentTypeParser(
  "application/json",
  { parseAs: "string" },
  (req, body, done) => {
    try {
      // Convert Buffer to string if necessary
      const jsonString = typeof body === "string" ? body : body.toString();

      if (!jsonString.trim()) {
        return done(null, {}); // Empty body, return empty object
      }

      const parsed = JSON.parse(jsonString);
      done(null, parsed);
    } catch (err) {
      done(err as Error, undefined);
    }
  }
);


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
