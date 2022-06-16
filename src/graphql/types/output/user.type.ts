
import { GraphQLObjectType } from "graphql";

import UserArgsFields from "./fields-models/user.fields";

export const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'User output type object',
  fields: () => UserArgsFields,
})


