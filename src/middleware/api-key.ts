import { FastifyRequest, FastifyReply } from "fastify";

const skipRoutes = ["/"],
  headerName = "x-api-key",
  allowBearerFormat = true;

export async function apiKeyMiddleware(
  request: FastifyRequest,
  reply: FastifyReply
) {
  // Skip validation for certain routes
  if (skipRoutes.includes(request.url)) {
    return;
  }
  console.log("AAAAAAAAAA", request.headers);

  const apiKey =
    request.headers[headerName] ||
    (allowBearerFormat ? request.headers["authorization"] : null);

  if (!apiKey) {
    return reply.status(401).send({
      error: "Unauthorized",
      message: `${headerName} header is required`,
    });
  }
  
  if(apiKey !== process.env.API_KEY) {
    return reply.status(401).send({
      error: "Unauthorized",
      message: `Invalid API key`, 
    });
  }
}
