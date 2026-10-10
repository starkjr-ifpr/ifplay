import { songRepository } from './repository.js';

export const songService = {
  // Lista todas as músicas
  async listSongs() {
    const songs = await songRepository.findAll();
    return songs;
  },

  // Busca uma música pelo id. Se não existir, avisa com um erro.
  async getSongById(id: number) {
    const song = await songRepository.findById(id);

    if (!song) {
      throw new Error('Música não encontrada');
    }

    return song;
  },

  // Cria uma música nova, depois de validar os dados.
  async createSong(title: string, artist: string) {
    const cleanTitle = title.trim();
    const cleanArtist = artist.trim();

    if (!cleanTitle || !cleanArtist) {
      throw new Error('Título e artista são obrigatórios');
    }

    const song = await songRepository.create(cleanTitle, cleanArtist);
    return song;
  },

  // Apaga uma música. Antes confere se ela existe.
  async deleteSong(id: number) {
    await this.getSongById(id);

    const song = await songRepository.delete(id);
    return song;
  },
};