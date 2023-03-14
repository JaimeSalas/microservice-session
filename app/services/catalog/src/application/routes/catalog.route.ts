import express from "express";
import { IProductReadsRepository, IProductUpdatesRepository } from "../../infrastrucure";
import Product from "../../infrastrucure/product-item";
import UpdateProductsCommand from "../commands/update-products.command";
import UpdateProductsCommandHandler from "../commands/update-products.command-handler";

const mapProduct = (value: any): Product => {
  return new Product(
    value.name,
    value.price,
    value.oldPrice,
    value.pictureUrl,
    value.storeUnits
  );
};

const mapProducts = (values: any[]): Product[] => values.map(mapProduct);

const getMessage = (products: any[]) => {
  const _products = mapProducts(products);
  return new UpdateProductsCommand(mapProducts(products));
};

export const catalogRoute = (
  productReadsRepository: IProductReadsRepository<Product>,
  productUpdatesRepository: IProductUpdatesRepository<Product>
) => {
  const router = express.Router();

  router.get("/", (_, res) => {
    // TODO: Add map to API model
    const products = productReadsRepository.getProducts();
    res.status(200).json(products);
  });

  router.post("/", (req, res) => {
    const { products } = req.body;
    const message = getMessage(products);
    const commamdHandler = new UpdateProductsCommandHandler(
      productUpdatesRepository
    );
    commamdHandler.handle(message);
    res.status(201).json({ ok: true });
  })


  return router;
};
