import Product from "../../infrastrucure/product-item";

export default class UpdateProductsCommand {
  products: Product[];
  constructor(_products: Product[]) {
    this.products = _products;
  }
}
