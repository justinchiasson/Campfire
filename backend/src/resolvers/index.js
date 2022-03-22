import { mergeResolvers } from '@graphql-tools/merge';
import albumResolver from './albums.js';
import artistResolver from './artists.js';
import songResolver from './songs.js';

const resolvers = [
  albumResolver,
  artistResolver,
  songResolver
];

export default mergeResolvers(resolvers);
