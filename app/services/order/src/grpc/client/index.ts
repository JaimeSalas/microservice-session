import { credentials } from "@grpc/grpc-js";
import { OrderingClient } from "../proto/ordering_grpc_pb";
import {
  CreateOrderRequest,
  BasketItem,
  Address,
  Payment,
} from "../proto/ordering_pb";

const client = new OrderingClient(
  "localhost:5000",
  credentials.createInsecure()
);

const getBasketItems = () => {
  const basketItemsJSON = [
    {
      id: "1",
      productId: 1,
      productName: "ProductA",
      unitPrice: 10.99,
      oldUnitPrice: 10.99,
      quantity: 2,
      pictureUrl: "",
    },
    {
      id: "2",
      productId: 2,
      productName: "ProductB",
      unitPrice: 6.99,
      oldUnitPrice: 6.99,
      quantity: 1,
      pictureUrl: "",
    },
  ];
  return basketItemsJSON.map((b) => {
    const basketItem = new BasketItem();
    basketItem.setId(b.id);
    basketItem.setProductid(b.productId);
    basketItem.setProductname(b.productName);
    basketItem.setUnitprice(b.unitPrice);
    basketItem.setOldunitprice(b.oldUnitPrice);
    basketItem.setQuantity(b.quantity);
    basketItem.setPictureurl(b.pictureUrl);
    return basketItem;
  });
};

const getAddress = () => {
  const address = new Address();
  address.setCity("Malaga");
  address.setStreet("Lemoncode");
  address.setState("Andalucia");
  address.setCountry("Spain");
  address.setZipcode("000000");
  return address;
};

const getPayment = () => {
  const payment = new Payment();
  payment.setCardTypeId(0);
  payment.setCardNumber("xxxxxx");
  payment.setCardHolderName("Joe Doe");
  payment.setCardExperiration("2027-02-05T19:49:50.879Z");
  payment.setCardSecurityNumber("xxxx");
  return payment;
};

const orderRequest = new CreateOrderRequest();

orderRequest.setItemsList(getBasketItems());
orderRequest.setBuyerid("1");
orderRequest.setAddress(getAddress());
orderRequest.setPayment(getPayment());

client.createOrder(orderRequest, (err, response) => {
  if (err) {
    console.error(err);
  }

  console.log(response);
});
