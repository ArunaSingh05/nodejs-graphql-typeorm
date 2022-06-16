import { GraphQLObjectType } from "graphql";

import UserAuthPayloadFields from "./fields-models/user-auth-payload.fields";

export const UserAuthPayLoadType = new GraphQLObjectType({
  name: 'UserAuthPayLoadType',
  description: 'Authpayload type object',
  fields: () => (UserAuthPayloadFields)
})