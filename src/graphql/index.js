import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash.merge';
import { Query, resolvers as queryResolvers } from './query';

const mainSchema = `
  schema {
    query: Query
  }
`;

export default makeExecutableSchema({
  typeDefs: [mainSchema, Query],
  resolvers: merge({}, queryResolvers)
});
