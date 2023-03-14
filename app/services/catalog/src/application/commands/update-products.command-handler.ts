import { IProductUpdatesRepository } from "../../infrastrucure/product-updates-repository";
import UpdateProductsCommand from "./update-products.command";
import Product from "../../infrastrucure/product-item";

export default class UpdateProductsCommandHandler {
  private _productUpdatesRepository: IProductUpdatesRepository<Product>;

  constructor(productUpdatesRepository: IProductUpdatesRepository<Product>) {
    this._productUpdatesRepository = productUpdatesRepository;
  }

  handle(message: UpdateProductsCommand) {
    message.products.forEach((p) => {
      this._productUpdatesRepository.updateProduct(p);
    });
  }
}
