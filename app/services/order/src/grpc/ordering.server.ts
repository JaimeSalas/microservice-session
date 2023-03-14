import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { IOrderingServer } from "./proto/ordering_grpc_pb";
import { CreateOrderRequest } from "./proto/ordering_pb";

import { persistentLayer } from "../infrastructure/persistent-layer";

import { Order } from "../domain/aggregate-models/order-aggregate/order";
import { Buyer } from "../domain/aggregate-models/buyer-aggregate/buyer";
import Address from "../domain/aggregate-models/order-aggregate/address";
import OrderStartedDomainEvent from "../domain/events/order-started-domain-event";
import BuyerAndPaymentMethodVerifiedDomainEvent from "../domain/events/buyer-and-payment-method-verified-domain-event";

const { persistentLayerEventEmitter } = persistentLayer;

persistentLayerEventEmitter.on(
  "orderStartedDomainEvent",
  (payload: OrderStartedDomainEvent) => {
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
  }
);

persistentLayerEventEmitter.on(
  "buyerAndPaymentMethodVerifiedDomainEvent",
  (payload: BuyerAndPaymentMethodVerifiedDomainEvent) => {
    const orderToUpdate = persistentLayer.findOrder(payload.orderId);
    console.log(payload.buyer);
    orderToUpdate.setBuyerId(payload.buyer.id);
    orderToUpdate.setPaymentId(payload.payment.id);

    console.log(orderToUpdate);

    // TODO: Send integration event OrderStartedIntegrationEvent - handle by basket
    // TODO: SetAwaitingValidationStatus
  }
);

export class OrderingServer implements IOrderingServer {
  [name: string]: import("@grpc/grpc-js").UntypedHandleCall;
  // createOrder: handleUnaryCall<CreateOrderRequest, Empty>;
  createOrder(
    call: ServerUnaryCall<CreateOrderRequest, Empty>,
    callback: sendUnaryData<Empty>
  ) {
    const orderRequest = call.request.toObject();

    const address = new Address(
      orderRequest.address.street,
      orderRequest.address.city,
      orderRequest.address.state,
      orderRequest.address.country,
      orderRequest.address.zipcode
    );

    const order = new Order(
      orderRequest.buyerid, // TODO: Retrieve from identity service
      "Foo", // TODO: Retrieve from identity service
      address,
      orderRequest.payment.cardTypeId,
      orderRequest.payment.cardNumber,
      orderRequest.payment.cardSecurityNumber,
      orderRequest.payment.cardHolderName,
      new Date(orderRequest.payment.cardExperiration)
    );

    orderRequest.itemsList.forEach((i) => {
      order.addOrderItem(
        i.productid,
        i.productname,
        i.unitprice,
        0,
        i.pictureurl,
        i.quantity
      );
    });

    persistentLayer.saveOrder(order);

    callback(null, new Empty());
  }
}
