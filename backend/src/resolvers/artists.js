const artistResolver = {
  Query: {
    artists: async (_, { search }, { dataSources }) => {
      const result = await dataSources.appleMusicAPI.searchArtists(search);
      if (result.results.artists) {
        return result.results.artists.data;
      }
    },
    artist: async (_, { id }, { dataSources }) => {
      const result = await dataSources.appleMusicAPI.getArtistByID(id);
      if (result.data) {
        return result.data[0];
      }
    }
  }
}

export default artistResolver;
