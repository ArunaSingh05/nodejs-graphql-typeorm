
import OrderQuerySchema from "./order.query";
import OrderService from "./../../services/orders.service";
import ProductsRepository from "./../../database/repositories/Products.repository";
import ProductService from "./../../services/products.service";
import ProductsQuerySchema from "./../queries/product.query";
import OrdersRepository from "../../database/repositories/Orders.repository";
import { UserRepository } from "../../database/repositories/User.repository";
import UserAuthService from "./../../services/user-auth.service";
import UserQuerySchema from "./user.query";

const productsRepository = new ProductsRepository();
const productService = new ProductService(productsRepository);
const productsQuerySchema = new ProductsQuerySchema(productService);
const ProductsQuery = productsQuerySchema.query;
const productMutation = productsQuerySchema.mutation;

const ordersRepository = new OrdersRepository();
const orderService = new OrderService(ordersRepository);
const orderQuerySchema = new OrderQuerySchema(orderService);
const orderQuery = orderQuerySchema.query;


const userRepository = new UserRepository();
const userAuthService = new UserAuthService(userRepository);
const userQuerySchema = new UserQuerySchema(userAuthService);
const userQuery = userQuerySchema.query;
const mutationQuery = userQuerySchema.mutation;

export const query = {
  ...ProductsQuery,
  ...orderQuery,
  ...userQuery
}

export const mutation = {
  ...productMutation,
  ...mutationQuery
}
