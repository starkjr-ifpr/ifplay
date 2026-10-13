import type { FastifyReply, FastifyRequest } from 'fastify';
import { songService } from './service.js';

// Formato a API espera receber
type CreateSongBody = {
  title: string;
  artist: string;
};

// Controller: recebe o pedido HTTP, chama o Service e devolve a resposta.
export const songController = {
  async create(
    request: FastifyRequest<{ Body: CreateSongBody }>,
    reply: FastifyReply,
  ) {
    const { title, artist } = request.body ?? {};

    // Confere se os dois campos chegaram e são textos
    if (typeof title !== 'string' || typeof artist !== 'string') {
      return reply
        .status(400)
        .send({ message: 'Título e artista são obrigatórios' });
    }

    try {
      const song = await songService.createSong(title, artist);
      // 201 = "criado com sucesso"
      return reply.status(201).send(song);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Erro ao criar música';
      return reply.status(400).send({ message });
    }
  },
};