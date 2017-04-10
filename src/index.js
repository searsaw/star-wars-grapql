import bodyParser from 'body-parser';
import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import http from 'http';
import schema from './graphql';

const { PORT = 8000 } = process.env;

const app = express();

app.use(bodyParser.json());

app.use('/graphql', graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}.`);
});
