import { RESTDataSource } from 'apollo-datasource-rest';

class AppleMusicAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.music.apple.com/v1/catalog/ca/';
  }

  willSendRequest(request) {
    request.headers.set('Authorization', `Bearer ${process.env.APPLE_MUSIC_KEY}`);
  }

  async searchArtists(search) {
    return this.get(`search?term=${encodeURIComponent(search)}&types=artists`);
  }

  async getArtistByID(id) {
    return this.get(`artists/${id}`);
  }
}

export default AppleMusicAPI;
