import { mergeResolvers } from '@graphql-tools/merge';
import artistResolver from './artists.js';
import songResolver from './songs.js';

const resolvers = [
  artistResolver,
  songResolver
];

export default mergeResolvers(resolvers);
