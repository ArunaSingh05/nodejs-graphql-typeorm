import { GraphQLID, GraphQLString } from "graphql"

import { UserType } from "../types/output/user.type"
import UserAuthService from "./../../services/user-auth.service"
import UserArgsFields from "../types/output/fields-models/user.fields"
import { UserAuthPayLoadType } from "../types/output/auth-payload.type"


export default class UserQuerySchema {
  query = {
    users: {
      type: UserType,
      args: {
        email: {
          type: GraphQLString
        },
        id: {
          type: GraphQLID
        },
      },
      resolve: this.getUser.bind(this)
    },
    login: {
      type: UserAuthPayLoadType,
      args: {
        email: {
          type: GraphQLString
        },
        password: {
          type: GraphQLString
        }
      },
      resolve: this.login.bind(this)
    }
  }

  mutation = {
    register: {
      type: UserAuthPayLoadType,
      args: UserArgsFields,
      resolve: this.register.bind(this)
    },
  }

  constructor(private userAuthService: UserAuthService) { }

  async getUser(_, args, context) {

  }

  async login(_, args, context) {
    return await this.userAuthService.login(args);
  }

  async register(_, args, context) {
    return await this.userAuthService.createUser(args);
  }
}