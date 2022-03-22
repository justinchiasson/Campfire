const albumResolver = {
  Query: {
    albums: async (_, { search }, { dataSources }) => {
      const result = await dataSources.appleMusicAPI.searchAlbums(search);
      if (result.results.albums) {
        return result.results.albums.data;
      }
    },
    album: async (_, { id }, { dataSources }) => {
      const result = await dataSources.appleMusicAPI.getAlbumByID(id);
      if (result.data) {
        return result.data[0];
      }
    }
  }
}

export default albumResolver;
