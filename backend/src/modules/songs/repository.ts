import { prisma } from '../../database/prisma.js'
import type { CreateSongInput } from './types.js'

export function findAll() {
  return prisma.song.findMany({ orderBy: { id: 'asc' } })
}

export function findById(id: number) {
  return prisma.song.findUnique({ where: { id } })
}

export function create(data: CreateSongInput) {
  return prisma.song.create({ data })
}

export async function deleteById(id: number): Promise<boolean> {
  const result = await prisma.song.deleteMany({ where: { id } })
  return result.count > 0
}
