import { mergeTypeDefs } from '@graphql-tools/merge';
import albumSchema from './albums.js';
import artistSchema from './artists.js';
import songSchema from './songs.js';

const schema = [
  albumSchema,
  artistSchema,
  songSchema
];

export default mergeTypeDefs(schema);
