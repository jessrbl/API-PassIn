import {
  errorHandler
} from "./chunk-FZNSAKNQ.mjs";
import {
  checkIn
} from "./chunk-XB5BZXGA.mjs";
import {
  createEvent
} from "./chunk-OQJ4XOL6.mjs";
import "./chunk-VBZYXCC2.mjs";
import {
  getAttendeeBadge
} from "./chunk-WUWCL6PL.mjs";
import {
  getEventAttendees
} from "./chunk-6Y327UYW.mjs";
import {
  getEvents
} from "./chunk-64YEJTL4.mjs";
import {
  registerForEvent
} from "./chunk-4ZP7VKZC.mjs";
import "./chunk-OH33D4AI.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass-in",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o constru\xEDda durante o NLW Unite da Rocketseat",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvents);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running");
});
export {
  app
};
