import type { FastifyReply, FastifyRequest } from 'fastify'
import * as songsService from './service.js'
import type { CreateSongInput, SongIdParams } from './types.js'

type SongIdRequest = FastifyRequest<{ Params: SongIdParams }>

function parseSongId(value: string): number | null {
  const id = Number(value)
  return Number.isSafeInteger(id) && id > 0 ? id : null
}

export async function listSongs(_request: FastifyRequest, reply: FastifyReply) {
  const songs = await songsService.listSongs()
  return reply.send(songs)
}

export async function getSongById(request: SongIdRequest, reply: FastifyReply) {
  const id = parseSongId(request.params.id)

  if (id === null) {
    return reply.code(400).send({ message: 'O ID da música deve ser um inteiro positivo.' })
  }

  const song = await songsService.getSongById(id)

  if (!song) {
    return reply.code(404).send({ message: 'Música não encontrada.' })
  }

  return reply.send(song)
}

export async function createSong(
  request: FastifyRequest<{ Body: CreateSongInput }>,
  reply: FastifyReply,
) {
  const song = await songsService.createSong(request.body)
  return reply.code(201).send(song)
}

export async function deleteSongById(request: SongIdRequest, reply: FastifyReply) {
  const id = parseSongId(request.params.id)

  if (id === null) {
    return reply.code(400).send({ message: 'O ID da música deve ser um inteiro positivo.' })
  }

  const wasDeleted = await songsService.deleteSongById(id)

  if (!wasDeleted) {
    return reply.code(404).send({ message: 'Música não encontrada.' })
  }

  return reply.code(204).send()
}
