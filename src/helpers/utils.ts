import { FastifyReply } from "fastify";
import { ApiResponse } from "./types.js";

export const omitKeys = <T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keysToOmit: K[]
): Omit<T, K> => {
  let finalObj = {};
  Object.keys(obj).forEach((key) => {
    if (!keysToOmit.includes(key as K)) {
      finalObj = { ...finalObj, ...{ [key]: obj[key] } };
    }
  });
  return finalObj as Omit<T, K>;
};

export function buildResponse(
  reply: FastifyReply,
  serviceResponse: ApiResponse
) {
  if (serviceResponse.success)
    return reply
      .code(serviceResponse?.code ?? 200)
      .send(omitKeys({ ...serviceResponse }, ["code"]));
  return reply
    .code(serviceResponse?.code ?? 500)
    .send(omitKeys({ ...serviceResponse }, ["code"]));
}

export function writeRawResponse(
  reply: FastifyReply,
  success: boolean,
  message: string,
  data?: any
) {
  reply.raw.write(JSON.stringify({ success, message, data }));
  reply.raw.write("\n\n");
}

export function writeProgressResponse(
  reply: FastifyReply,
  progress: number,
  meta?: any
) {
  if (progress > 100) progress = 100;
  writeRawResponse(reply, true, "progress", { progress, ...meta });
}