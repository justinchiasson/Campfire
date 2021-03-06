import { RESTDataSource } from 'apollo-datasource-rest';

class AppleMusicAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.music.apple.com/v1/catalog/ca/';
  }

  willSendRequest(request) {
    request.headers.set('Authorization', `Bearer ${process.env.APPLE_MUSIC_KEY}`);
  }

  // search for multiple artists by search term
  async searchArtists(search) {
    return this.get(`search?term=${encodeURIComponent(search)}&types=artists`);
  }

  // get 1 artist by apple music ID
  async getArtistByID(id) {
    return this.get(`artists/${id}`);
  }

  // search for multiple songs by search term
  async searchSongs(search) {
    return this.get(`search?term=${encodeURIComponent(search)}&limit=25&types=songs`);
  }

  // get 1 song by apple music ID
  async getSongByID(id) {
    return this.get(`songs/${id}`);
  }

  // search for multiple albums by search term
  async searchAlbums(search) {
    return this.get(`search?term=${encodeURIComponent(search)}&limit=25&types=albums`);
  }

  // get 1 album by apple music ID
  async getAlbumByID(id) {
    return this.get(`albums/${id}`);
  }
}

export default AppleMusicAPI;
