import { GraphQLObjectType } from "graphql";

import productFields from "./fields-models/product.fields";

export const ProductType = new GraphQLObjectType({
  name: 'Products',
  description: 'Products for customers to buy',
  fields: () => (productFields),
});
