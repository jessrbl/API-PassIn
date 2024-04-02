import fastify from "fastify"
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";
import { createEvent } from "./routes/createEventRoute";
import { registerForEvent } from "./routes/registerForEvent";
import { getEvents } from "./routes/getEvents";
import { getAttendeeBadge } from "./routes/getAttendeeBadge";


const app = fastify()
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);


app.register(createEvent)
app.register(registerForEvent)
app.register(getEvents)
app.register(getAttendeeBadge)

app.listen({port: 3333})
.then( () => {
    console.log('HTTP server running')
})