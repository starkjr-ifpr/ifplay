import * as songsRepository from './repository.js'
import type { CreateSongInput } from './types.js'

export function listSongs() {
  return songsRepository.findAll()
}

export function getSongById(id: number) {
  return songsRepository.findById(id)
}

export function createSong(input: CreateSongInput) {
  return songsRepository.create({
    title: input.title.trim(),
    artist: input.artist.trim(),
  })
}

export function deleteSongById(id: number) {
  return songsRepository.deleteById(id)
}
