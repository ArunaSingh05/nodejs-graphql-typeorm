import { GraphQLList, GraphQLString } from "graphql";

import { validateJWT } from '../../middlewares/auth.middleware';
import ProductQueryFields from "../types/output/fields-models/product.fields";
import { ProductType } from "../types/output/product.type";
import ProductService from "../../services/products.service";

export default class ProductsQuerySchema {
  query = {
    products: {
      type: new GraphQLList(ProductType),
      description: 'This will return the product present in the database',
      args: ProductQueryFields,
      resolve: this.getProducts.bind(this)
    }
  };
  mutation = {
    update: {
      type: ProductType,
      args: ProductQueryFields,
      resolve: this.updateProduct.bind(this)
    },
    addProduct: {
      type: ProductType,
      args: ProductQueryFields,
      resolve: this.addProduct.bind(this)
    },
    deleteProduct: {
      type: ProductType,
      args: { productCode: { type: GraphQLString } },
      resolve: this.deleteProduct.bind(this)
    }
  };
  constructor(private productService: ProductService) { }


  async getProducts(
    parent: any,
    fields: any,
    req: Request,
  ) {
    await validateJWT(req);
    return await this.productService.getProducts(fields)
  }
  async updateProduct(_, args) {
    const product = await this.productService.updateProduct(args)
    return product[0];
  }
  async addProduct(_, args, req: Request) {
    await validateJWT(req);
    const product = await this.productService.addProduct(args)
    return product[0];
  }
  async deleteProduct(_, args, req: Request) {
    await validateJWT(req);
    const product = await this.productService.deleteProduct(args);
    return product[0];
  }
};

