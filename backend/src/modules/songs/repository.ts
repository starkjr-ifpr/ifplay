import { prisma } from '../../database/prisma.js';

// Repository: só conversa com o banco de dados.
// Cada função abaixo faz uma operação na tabela "songs".

export const songRepository = {
    // Busca todas as músicas
    async findAll() {
        const songs = await prisma.song.findMany();
        return songs;
    },

    // Busca uma música pelo id (devolve null se não existir)
    async findById(id: number) {
        const song = await prisma.song.findUnique({
            where: { id: id },
        });
        return song;
    },

    // Cria uma música nova com título e artista
    async create(title: string, artist: string) {
        const song = await prisma.song.create({
            data: { title: title, artist: artist },
        });
        return song;
    },

    // Apaga uma música pelo id
    async delete(id: number) {
        const song = await prisma.song.delete({
            where: { id: id },
        });
        return song;
    },
};

