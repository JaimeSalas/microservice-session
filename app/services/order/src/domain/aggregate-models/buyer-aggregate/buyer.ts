import { Entity } from "../entity";
import PaymentMethod from "./payment-method";
import { isFalsyOrWhiteSpace } from "../validator";
import { CardType } from "./card-type";
import BuyerAndPaymentMethodVerifiedDomainEvent from "../../events/buyer-and-payment-method-verified-domain-event";

export class Buyer extends Entity {
  private _identityGuid: string;
  get identityGuid(): string {
    return this._identityGuid;
  }

  private set identityGuid(value: string) {
    this._identityGuid = value;
  }

  private _name: string;
  get name(): string {
    return this._name;
  }

  private set name(value: string) {
    this._name = value;
  }

  private _paymentMethods: PaymentMethod[];

  get paymentMethods(): PaymentMethod[] {
    return this._paymentMethods;
  }

  constructor(identity: string, name: string) {
    super();
    if (isFalsyOrWhiteSpace(identity)) {
      throw Error("Identity not provided");
    }

    if (isFalsyOrWhiteSpace(name)) {
      throw Error("Name not provided");
    }

    this.identityGuid = identity;
    this.name = name;
    this._paymentMethods = [];
  }

  verifyOrAddPaymentMethod(
    cardType: CardType,
    alias: string,
    cardNumber: string,
    securityNumber: string,
    cardHolderName: string,
    expiration: Date,
    orderId: number
  ): PaymentMethod {
    const existingPayment = this._paymentMethods.find((p) => {
      p.isEqualTo(cardType, cardNumber, expiration);
    });

    if (existingPayment != null) {
      this.addDomainEvent(
        new BuyerAndPaymentMethodVerifiedDomainEvent(
          this,
          existingPayment,
          orderId
        )
      );

      return existingPayment;
    }

    const payment = new PaymentMethod(
      cardType,
      alias,
      cardNumber,
      securityNumber,
      cardHolderName,
      expiration
    );

    this._paymentMethods.push(payment);

    this.addDomainEvent(
      new BuyerAndPaymentMethodVerifiedDomainEvent(this, payment, orderId)
    );

    return payment;
  }
}
