import { EventEmitter } from "node:events";
import { Buyer } from "../domain/aggregate-models/buyer-aggregate/buyer";
import PaymentMethod from "../domain/aggregate-models/buyer-aggregate/payment-method";
import { Order } from "../domain/aggregate-models/order-aggregate/order";
import * as Data from "./data";

class PersisrtentLayerEventEmmitter extends EventEmitter {}

const persistentLayerEventEmitter = new PersisrtentLayerEventEmmitter();

// TODO: Remove
// NOTE: Temporal interface to type saved values
export interface IPersistent {
  eventName: string;
  payload: any;
}

class PersistentLayer {
  get persistentLayerEventEmitter() {
    return persistentLayerEventEmitter;
  }

  findOrder(orderId: number) {
    const retrievedOrder = Data.findOrder(orderId);
    return retrievedOrder ? (retrievedOrder.value as Order) : null;
  }

  saveOrder(order: Order) {
    const id = Math.floor(Math.random() * 100);
    order.id = id;

    Data.saveOrder({
      id: id.toString(), // TODO: Update Data and Remove id
      value: order,
    });

    const payload = order.domainEvents[0];
    order.clearDomainEvents();

    this.emit({ eventName: "orderStartedDomainEvent", payload });
  }

  findBuyer(userId: string) {
    const retrievedBuyer = Data.findBuyer(userId);
    return retrievedBuyer ? (retrievedBuyer.value as Buyer) : null;
  }

  saveBuyer(buyer: Buyer) {
    const id = Math.floor(Math.random() * 100);
    buyer.id = id;
    Data.saveBuyer({
      id: id.toString(),
      value: buyer,
    });

    const payload = buyer.domainEvents[0];
    buyer.clearDomainEvents();
    this.emit({
      eventName: "buyerAndPaymentMethodVerifiedDomainEvent",
      payload,
    });
  }

  updateBuyer(buyer: Buyer) {
    Data.updateBuyer({
      id: buyer.identityGuid,
      value: buyer,
    });

    const payload = buyer.domainEvents[0];
    buyer.clearDomainEvents();
    this.emit({
      eventName: "buyerAndPaymentMethodVerifiedDomainEvent",
      payload,
    });
  }

  private emit(value: IPersistent) {
    const { eventName, payload } = value;
    persistentLayerEventEmitter.emit(eventName, payload);
  }
}

export const persistentLayer = new PersistentLayer();
