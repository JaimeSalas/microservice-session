import { operations, Data } from "./data";
import Product from "./product-item";

export interface IProductReadsRepository<T extends Data> {
  getProducts(): T[];
}

const _doOperation = operations();

export const productReadsRepository: IProductReadsRepository<Product> = {
  getProducts(): Product[] {
    return _doOperation.getAll() as Product[];
  },
};
