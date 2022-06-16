import { GraphQLNonNull, GraphQLString } from "graphql"
import { UserType } from "../user.type"

export default {
  user:
  {
    type: new GraphQLNonNull(UserType),
  },
  token: {
    type: GraphQLString
  },
  status: {
    type: GraphQLString
  },
  message: {
    type: GraphQLString
  }
}
