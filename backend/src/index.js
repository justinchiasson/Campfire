import cors from 'cors';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

const app = express();
app.use(cors());

const server = new ApolloServer({});

server.applyMiddleware({
  app,
  path: '/graphql'
});

app.listen({
  port: 8000
}, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});
