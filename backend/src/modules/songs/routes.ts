import type { FastifyInstance } from 'fastify';
import { songController } from './controller.js';
//liga o endereco
export async function songRoutes(app: FastifyInstance) {
    app.post('/songs', songController.create);
}