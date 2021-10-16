import cors from 'cors';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import artistSchema from './schema/artists.js'
import artists from './resolvers/artists.js';
import AppleMusicAPI from './apis/apple-music-api.js';

const app = express();
app.use(cors());

const server = new ApolloServer({
  typeDefs: artistSchema,
  resolvers: artists,
  dataSources: () => {
    return {
      appleMusicAPI: new AppleMusicAPI()
    }
  }
});

await server.start();

server.applyMiddleware({
  app,
  path: '/graphql'
});

app.listen({
  port: 8000
}, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});
