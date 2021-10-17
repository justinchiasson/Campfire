import { mergeTypeDefs } from '@graphql-tools/merge';
import artistSchema from './artists.js';
import songSchema from './songs.js';

const schema = [
  artistSchema,
  songSchema
];

export default mergeTypeDefs(schema);
