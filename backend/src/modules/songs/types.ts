export type Song = {
  id: number
  title: string
  artist: string
}

export type CreateSongInput = {
  title: string
  artist: string
}

export type SongIdParams = {
  id: string
}
