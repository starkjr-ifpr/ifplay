import { prisma } from '../../database/prisma.js';

export const songRepository = {
  findAll() {
    return prisma.song.findMany();
  },

  findById(id: number) {
    return prisma.song.findUnique({ where: { id } });
  },

  create(data: { title: string; artist: string }) {
    return prisma.song.create({ data });
  },

  delete(id: number) {
    return prisma.song.delete({ where: { id } });
  },
};  