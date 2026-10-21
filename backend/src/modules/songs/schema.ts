export const songIdParamsSchema = {
  type: 'object',
  required: ['id'],
  properties: {
    id: { type: 'string', pattern: '^[1-9][0-9]*$' },
  },
  additionalProperties: false,
} as const

export const createSongBodySchema = {
  type: 'object',
  required: ['title', 'artist'],
  properties: {
    title: { type: 'string', minLength: 1, maxLength: 200, pattern: '.*\\S.*' },
    artist: { type: 'string', minLength: 1, maxLength: 200, pattern: '.*\\S.*' },
  },
  additionalProperties: false,
} as const
