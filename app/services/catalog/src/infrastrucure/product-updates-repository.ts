import { operations, Data } from "./data";
import Product from "./product-item";

export interface IProductUpdatesRepository<T extends Data> {
  updateProduct<T>(product: T): void;
  deleteProduct(id: number): void;
}

const _doOperation = operations();

export const productUpdatesRepository: IProductUpdatesRepository<Product> = {
  updateProduct<Product>(product: Product): void {
    _doOperation.update(product);
  },
  deleteProduct(id: number): void {
    _doOperation.delete(id);
  },
};
