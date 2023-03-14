import Address from "./address";
import OrderItem from "./order-item";
import { Entity } from "../entity";
import OrderStartedDomainEvent from "../../events/order-started-domain-event";

export enum OrderStatus {
    Submitted,
    AwaitingValidation,
    StockConfirmed,
    Paid,
    Shipped,
    Cancelled,
  }


  export class Order extends Entity {
    private _orderDate: Date;
  
    private _address: Address;
    get address(): Address {
      return this._address;
    }
    private set address(value: Address) {
      this._address = value;
    }
  
    private _buyerId?: number;
    public get BuyerId(): number {
      return this._buyerId;
    }
  
    private _orderStatus: OrderStatus;
    get orderStatus(): OrderStatus {
      return this._orderStatus;
    }
  
    private set orderStatus(value: OrderStatus) {
      this._orderStatus = value;
    }
  
    private _orderItems: OrderItem[];
  
    get orderItems(): OrderItem[] {
      return this._orderItems;
    }
  
    private _paymentMethodId: number;
  
    public constructor(
      userId: string,
      userName: string,
      address: Address,
      cardTypeId: number,
      cardNumber: string,
      cardSecurityNumber: string,
      cardHolderName: string,
      cardExpiration: Date,
      buyerId: number = null,
      paymentMethodId: number = null
    ) {
      super();
      this._buyerId = buyerId;
      this._paymentMethodId = paymentMethodId;
      this._orderStatus = OrderStatus.Submitted;
      this._orderDate = new Date();
      this._address = address;
      this._orderItems = [];
  
      // Add the OrderStarterDomainEvent to the domain events collection
      // to be triggered when comitting changes into persistence layer
      this.addOrderStartedDomainEvent(
        userId,
        userName,
        cardTypeId,
        cardNumber,
        cardSecurityNumber,
        cardHolderName,
        cardExpiration
      );
    }
  
    setPaymentId(id: number) {
      this._paymentMethodId = id;
    }
  
    setBuyerId(id: number) {
      this._buyerId = id;
    }
  
    private addOrderStartedDomainEvent(
      userId: string,
      userName: string,
      cardTypeId: number,
      cardNumber: string,
      cardSecurityNumber: string,
      cardHolderName: string,
      cardExpiration: Date
    ) {
      const orderStartedDomainEvent = new OrderStartedDomainEvent(
        this,
        userId,
        userName,
        cardTypeId,
        cardNumber,
        cardSecurityNumber,
        cardHolderName,
        cardExpiration
      );
  
      this.addDomainEvent(orderStartedDomainEvent);
    }
  
    public addOrderItem(
      productId: number,
      productName: string,
      unitprice: number,
      discount: number,
      pictureUrl: string, 
      units: number = 1
    ) {
      // TODO: Implement behavior for discount
      const orderItem = new OrderItem(
        productId,
        productName,
        unitprice,
        discount,
        pictureUrl,
        units
      );
      this._orderItems.push(orderItem);
    }
  }
