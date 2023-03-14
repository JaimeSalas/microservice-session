import { Buyer } from "../aggregate-models/buyer-aggregate/buyer";
import PaymentMethod from "../aggregate-models/buyer-aggregate/payment-method";

export default class BuyerAndPaymentMethodVerifiedDomainEvent {
  private _buyer: Buyer;
  get buyer(): Buyer {
    return this._buyer;
  }

  private set buyer(buyer: Buyer) {
    this._buyer = buyer;
  }

  private _payment: PaymentMethod;
  get payment(): PaymentMethod {
    return this._payment;
  }

  private set payment(payment: PaymentMethod) {
    this._payment = payment;
  }

  private _orderId: number;
  get orderId(): number {
    return this._orderId;
  }

  private set orderId(orderId: number) {
    this._orderId = orderId;
  }

  constructor(buyer: Buyer, payment: PaymentMethod, orderId: number) {
    this.buyer = buyer;
    this.payment = payment;
    this.orderId = orderId;
  }
}
