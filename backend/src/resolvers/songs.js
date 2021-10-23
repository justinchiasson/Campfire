const songResolver = {
  Query: {
    songs: async (_, { search }, { dataSources }) => {
      const result = await dataSources.appleMusicAPI.searchSongs(search);
      if (result.results.songs) {
        return result.results.songs.data;
      }
    },
    song: async (_, { id }, { dataSources }) => {
      const result = await dataSources.appleMusicAPI.getSongByID(id);
      console.log(result.data[0].relationships.albums.data);
      if (result.data) {
        return result.data[0];
      }
    }
  }
}

export default songResolver;
