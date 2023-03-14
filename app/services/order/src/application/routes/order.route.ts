import express from "express";
import { Order } from "../../domain/aggregate-models/order-aggregate/order";
import { Buyer } from "../../domain/aggregate-models/buyer-aggregate/buyer";
import { persistentLayer } from "../../infrastructure/persistent-layer";
import Address from "../../domain/aggregate-models/order-aggregate/address";
import OrderStartedDomainEvent from "../../domain/events/order-started-domain-event";
import BuyerAndPaymentMethodVerifiedDomainEvent from "../../domain/events/buyer-and-payment-method-verified-domain-event";

const { persistentLayerEventEmitter } = persistentLayer;

persistentLayerEventEmitter.on('orderStartedDomainEvent', (payload: OrderStartedDomainEvent) => {
  const cardTypeId = payload.cardTypeId !== 0 ? payload.cardTypeId : 1;
  let buyer = persistentLayer.findBuyer(payload.userId);
  const buyerOriginallyExisted = !!buyer;

  if (!buyerOriginallyExisted) {
    buyer = new Buyer(payload.userId, payload.userName);
  }

  buyer.verifyOrAddPaymentMethod(
    cardTypeId,
    `Payment method on ${new Date()}`,
    payload.cardNumber,
    payload.cardSecuirityNumber,
    payload.cardHolderName,
    payload.cardExpiration,
    payload.order.id
  );

  if (buyerOriginallyExisted) {
    persistentLayer.updateBuyer(buyer);
  } else {
    persistentLayer.saveBuyer(buyer);
  }
});

persistentLayerEventEmitter.on(
  "buyerAndPaymentMethodVerifiedDomainEvent",
  (payload: BuyerAndPaymentMethodVerifiedDomainEvent) => {
    const orderToUpdate = persistentLayer.findOrder(payload.orderId);
    console.log(payload.buyer);
    orderToUpdate.setBuyerId(payload.buyer.id);
    orderToUpdate.setPaymentId(payload.payment.id);

    console.log(orderToUpdate);
    // Integration Message 
  }
);

export const orderRoute = () => {
  const router = express.Router();

  router.post('/start', (_, res) => {
    const order = new Order(
      "1", 
      "j", 
      new Address("foo", "foo", "foo", "foo", "foo"), 0, "cardnumber", "cardsecuritynumber", "cardholdenumber", new Date(2025, 2, 2)
    );
    persistentLayer.saveOrder(order);
    res.status(200).json({ ok: true });
  });

  router.get("/resource", (_, res) => {
    res.status(200).json({ ok: true });
  });

  return router;
};
