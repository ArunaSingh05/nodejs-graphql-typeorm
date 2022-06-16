import * as express from 'express';
import * as morgan from 'morgan';
import * as expressip from 'express-ip';

import Database from './src/database/connection';
import AppConfig from './src/config/app-config';
import graphQLRouter from './src/routes/graphql.route';
import UserIpInfoLogger from './src/middlewares/user-ip-info-logger'

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(expressip().getIpInfoMiddleware)

async function startApolloServer() {
  try {
    app.use(UserIpInfoLogger);
    app.use('/graphql', graphQLRouter);
    const GlobalErrorHandler =
      (error: any, req: any, res: any, next) => {
        res.status(500).json({ errorStack: error.stack });
      }
    app.use(GlobalErrorHandler);
    initializeDbConnection();
    app.listen({ port: AppConfig.port }, () => {
      console.log(`🚀 Node Server ready at ${AppConfig.basePath}:${AppConfig.port}`);
      console.log(`🚀 GraphQL Server ready at ${AppConfig.basePath}:${AppConfig.port}/graphql`);
    });
  } catch (error) {
    throw error;
  }
}

async function initializeDbConnection() {
  try {
    new Database();
  } catch (error) {
    throw error;
  }
}

startApolloServer();
