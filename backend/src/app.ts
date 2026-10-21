import cors from '@fastify/cors'
import Fastify from 'fastify'
import { songsRoutes } from './modules/songs/routes.js'

export async function buildApp() {
  const app = Fastify({
    logger: true,
  })

  await app.register(cors, {
    origin: true,
  })

  app.get('/health', async () => {
    return { status: 'ok' }
  })

  await app.register(songsRoutes)

  return app
}
