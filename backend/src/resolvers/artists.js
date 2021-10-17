const artistResolver = {
  Query: {
    artists: async (_, { search }, { dataSources }) => {
      const result = await dataSources.appleMusicAPI.searchArtists(search);
      return result.results.artists.data;
    },
    artist: async (_, { id }, { dataSources }) => {
      const result = await dataSources.appleMusicAPI.getArtistByID(id);
      return result.data[0];
    }
  }
}

export default artistResolver;
