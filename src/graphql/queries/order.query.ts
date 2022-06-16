import { OrderType } from "../types/output/order.type";
import { validateJWT } from './../../middlewares/auth.middleware';
import { OrderOutputFieldsList } from '../types/output/fields-models/order.fields';
import OrderService from './../../services/orders.service';

export default class OrderQuerySchema {
  query = {
    order: {
      // return typ is OrderType
      type: OrderType,
      description: 'Query order table',
      // query arguments
      args: OrderOutputFieldsList,
      // query resolver
      resolve: this.getOrder.bind(this)
    }
  };

  constructor(private orderService: OrderService) { }

  async getOrder(_, fields: { id: String }, req: Request) {
    await validateJWT(req);
    console.log(await this.orderService.getOrderList(fields))
    return await this.orderService.getOrderList(fields);
  }
}