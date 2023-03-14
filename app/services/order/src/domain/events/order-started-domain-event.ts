import { Order } from "../aggregate-models/order-aggregate/order";

export default class OrderStartedDomainEvent {
  private _userId: string;
  get userId(): string {
    return this._userId;
  }

  private _userName: string;
  get userName(): string {
    return this._userName;
  }

  private _cardTypeId: number;
  get cardTypeId() {
    return this._cardTypeId;
  }

  private _cardNumber: string;
  get cardNumber(): string {
    return this._cardNumber;
  }

  private _cardSecurityNumber: string;
  get cardSecuirityNumber(): string {
    return this._cardSecurityNumber;
  }

  private _cardHolderName: string;
  get cardHolderName(): string {
    return this._cardHolderName;
  }

  private _cardExpiration: Date;
  get cardExpiration(): Date {
    return this._cardExpiration;
  }

  private _order: Order;
  get order(): Order {
    return this._order;
  }

  constructor(
    order: Order,
    userId: string,
    userName: string,
    cardTypeId: number,
    cardNumber: string,
    cardSecurityNumber: string,
    cardHolderName: string,
    cardExpiration: Date
  ) {
    this._order = order;
    this._userId = userId;
    this._userName = userName;
    this._cardTypeId = cardTypeId;
    this._cardNumber = cardNumber;
    this._cardSecurityNumber = cardSecurityNumber;
    this._cardHolderName = cardHolderName;
    this._cardExpiration = cardExpiration;
  }
}
