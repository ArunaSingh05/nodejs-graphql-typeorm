import * as express from 'express';

import { graphqlHTTP } from 'express-graphql';
import graphqljs from '../graphql';

const graphQLRouter = express.Router();

graphQLRouter.use(
  '/',
  graphqlHTTP((req: any) => ({
    schema: graphqljs,
    context: req.context,
    graphiql: true,
  })),
);

export default graphQLRouter;
