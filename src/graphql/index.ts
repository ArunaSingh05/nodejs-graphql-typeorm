import { GraphQLObjectType, GraphQLSchema } from "graphql";

import { mutation, query } from "./queries";

const rootQuery = new GraphQLObjectType({
  name: 'Root_Query',
  description: 'Queries for product backend API',
  fields: query,
});
const rootMutation = new GraphQLObjectType({
  name: 'Root_Mutation',
  description: 'Queries to update product',
  fields: mutation
})

export default new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation
});