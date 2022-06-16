import { GraphQLFloat, GraphQLInt, GraphQLString } from "graphql";

export default {
  id: {
    type: GraphQLInt!,
  },
  productCode: {
    type: GraphQLString!,
  },
  productName: {
    type: GraphQLString!,
  },
  productLine: {
    type: GraphQLString,
  },
  productScale: {
    type: GraphQLString,
  },
  productVendor: {
    type: GraphQLString,
  },
  productDescription: {
    type: GraphQLString,
  },
  quantityInStock: {
    type: GraphQLString,
  },
  buyPrice: {
    type: GraphQLFloat,
  },
  MSRP: {
    type: GraphQLFloat,
  }
}


// Test Query

// mutation{
//   addProduct(
//     id: 3213,
//     productCode: "S72_3213",
//     productName: "Pont Yacht 1",
//     productLine: "Vintage Cars",
//     productScale: "1:50",
//     productVendor: "Carousel DieCast Legends",
//     productDescription: "Completed model measures 19 1/2 inches long, 9 inches high, 3inches wide and is in barn red/black. All wood and metal.",
//     quantityInStock: "551",
//     buyPrice: 14.30,
//     MSRP: 58.58,
//   ){
//     productName
//   }
// }