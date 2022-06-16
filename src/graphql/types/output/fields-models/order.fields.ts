import { GraphQLID, GraphQLInt, GraphQLString } from 'graphql';

export const OrderOutputFieldsList = {
  id: {
    type: GraphQLID
  },
  int: {
    type: GraphQLInt
  },
  orderNumber: {
    type: GraphQLInt
  },
  orderDate: {
    type: GraphQLString
  },
  requiredDate: {
    type: GraphQLString
  },
  shippedDate: {
    type: GraphQLString
  },
  status: {
    type: GraphQLString
  },
  comments: {
    type: GraphQLString
  },
  text: {
    type: GraphQLString
  },
  customerNumber: {
    type: GraphQLInt
  }
}