import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";

import { CreateNutritionController } from "./controllers/CreateNutritionController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    // ---- ROTA DE TESTE ----
    fastify.get('/teste', (request: FastifyRequest, reply: FastifyReply) => {
        reply.send({ ok: true })
    })
    // -----------------------

    fastify.post('/create', async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateNutritionController().handle(request, reply)
    })
}