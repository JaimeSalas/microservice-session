import { Buyer } from "../domain/aggregate-models/buyer-aggregate/buyer";
import { Order } from "../domain/aggregate-models/order-aggregate/order";

// Note: Basic data layer, emulates a simple data access.
export interface DataEntity {
  id: string;
  value: any;
}

interface Data {
  orders: DataEntity[];
  buyers: DataEntity[];
}

let data: Data = {
  orders: [],
  buyers: [],
};

export const saveOrder = (order: DataEntity) => {
  data.orders = [...data.orders, order];
};

export const updateOrder = (order: DataEntity) => {
  data.orders = data.orders.map((o) => {
    if (o.id === order.id) {
      return order;
    }
    return o;
  });
};

export const saveBuyer = (buyer: DataEntity) => {
  data.buyers = [...data.buyers, buyer];
};

export const updateBuyer = (buyer: DataEntity) => {
  data.buyers = data.buyers.map((b) => {
    if (b.id === buyer.id) {
      return buyer;
    }
    return b;
  });
};

export const findBuyer = (userId: string) => {
  return data.buyers.find((b) => (b.value as Buyer).identityGuid === userId);
};

export const findOrder = (orderId: number) => {
  return data.orders.find((o) => (o.value as Order).id === orderId);
};

