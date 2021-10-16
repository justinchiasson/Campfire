export default {
  Query: {
    artists: async (_, { search }, { dataSources }) => {
      const result = await dataSources.appleMusicAPI.searchArtists(search);
      return result.results.artists.data;
    },
    artist: async (_, { id }, { dataSources }) => {
      const result = await dataSources.appleMusicAPI.getArtistByID(id);
      console.log(result.data[0].relationships.albums.data);
      return result.data[0];
    }
  }
}
