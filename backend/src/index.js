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

const response = await fetch('https://api.music.apple.com/v1/catalog/ca/search?term=spacey&types=artists', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkdZODVUWDg4UkgifQ.eyJpYXQiOjE2MzM0NTk2NDAsImV4cCI6MTY0OTAxMTY0MCwiaXNzIjoiUkNUNDgyUzc2MiJ9.qRzJNQclFnMRakur2z9X4Eaw-3cr2oeDAVYawrZhP3jtF9GXYC2d0DA5KAEoDFN4rdN1QVnvf84VgKl4C0ymFQ'
        }
      });
const tester = await response.json();
console.log(tester.results.artists.data[0]);
