import { GraphQLObjectType } from 'graphql';
import { OrderOutputFieldsList } from './fields-models/order.fields';

export const OrderType = new GraphQLObjectType({
  name: 'Order',
  description: 'This will query order table',
  fields: () => (OrderOutputFieldsList)
})