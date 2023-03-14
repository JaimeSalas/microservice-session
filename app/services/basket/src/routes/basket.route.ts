import express from "express";
import {
  IBasket,
  IBasketItem,
  IBasketRepository,
} from "../infrastructure/basket-repository";

export const basketRoute = (repo: IBasketRepository) => {
  const router = express.Router();

  router.get("/:id", (req, res) => {
    const { id } = req.params;
    const basket = repo.getBasket(+id) ?? { items: [], userId: +id };
    if (!basket) {
      repo.updateBasket({ items: [], userId: +id });
    }
    res.status(200).send(basket);
  });

  const mapToBasket = (value: any): IBasket => {
    const mapBasketItem = (value: any): IBasketItem => ({
      id: value.id, // userId
      oldUnitPrice: +value.oldUnitPrice,
      pictureUrl: value.pictureUrl,
      productId: +value.productId,
      productName: value.productName,
      quantity: +value.quantity,
      unitPrice: +value.unitPrice,
    });
    return {
      userId: +value.userId,
      items: value.items.map(mapBasketItem),
    };
  };

  router.post("/", (req, res) => {
    try {
      const basket = mapToBasket(req.body);
      repo.updateBasket(basket);
      res.status(200).send({ ok: true });
    } catch (error) {
      res.status(502);
    }
  });

  router.post("/checkout", (req, res) => {
    // TODO: Send integration event
    const { userId } = req.body;
    repo.deleteBasket(+userId);
    res.status(200).send({ ok: true });
  });

  router.delete("/:id", (req, res) => {
    const { id } = req.params;
    repo.deleteBasket(+id);
    res.status(200).send({ ok: true });
  });

  return router;
};
