import { GraphQLID, GraphQLInt, GraphQLString } from "graphql";

export default {
  id: {
    type: GraphQLInt!,
  },
  firstName: {
    type: GraphQLString
  },
  lastName: {
    type: GraphQLString
  },
  age: {
    type: GraphQLInt
  },
  name: {
    type: GraphQLString
  },
  email: {
    type: GraphQLString
  },
  password: {
    type: GraphQLString
  }
}