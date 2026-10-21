import type { FastifyPluginAsync } from 'fastify'
import * as songsController from './controller.js'
import { createSongBodySchema, songIdParamsSchema } from './schema.js'
import type { CreateSongInput, SongIdParams } from './types.js'

export const songsRoutes: FastifyPluginAsync = async (app) => {
  app.get('/songs', songsController.listSongs)

  app.get<{ Params: SongIdParams }>(
    '/songs/:id',
    { schema: { params: songIdParamsSchema } },
    songsController.getSongById,
  )

  app.post<{ Body: CreateSongInput }>(
    '/songs',
    { schema: { body: createSongBodySchema } },
    songsController.createSong,
  )

  app.delete<{ Params: SongIdParams }>(
    '/songs/:id',
    { schema: { params: songIdParamsSchema } },
    songsController.deleteSongById,
  )
}
