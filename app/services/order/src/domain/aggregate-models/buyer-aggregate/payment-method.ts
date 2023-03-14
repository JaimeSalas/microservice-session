import { CardType } from "./card-type";
import { isFalsyOrWhiteSpace } from "../validator";
import { Entity } from "../entity";

export default class PaymentMethod extends Entity {
  private _alias: string;
  private _cardNumber: string;
  private _securityNumber: string;
  private _cardHolderName: string;
  private _expiration: Date;

  private _cardType: CardType;
  get cardType(): CardType {
    return this._cardType;
  }

  private set cardType(value: CardType) {
    this._cardType = value;
  }

  constructor(
    cardType: CardType,
    alias: string,
    cardNumber: string,
    securityNumber: string,
    cardHolderName: string,
    expiration: Date
  ) {
    super();
    this.id = 0;
    if (isFalsyOrWhiteSpace(cardNumber)) {
      throw Error("OrderingDomainException cardNumber");
    }

    if (isFalsyOrWhiteSpace(securityNumber)) {
      throw Error("OrderingDomainException securityNumber");
    }

    if (isFalsyOrWhiteSpace(cardHolderName)) {
      throw Error("OrderingDomainException cardHoldName");
    }

    if (expiration < new Date()) {
      throw Error("OrderingDomainException expiration");
    }

    this._cardNumber = cardNumber;
    this._securityNumber = securityNumber;
    this._cardHolderName = cardHolderName;
    this._expiration = expiration;
    this._alias = alias;
    this.cardType = cardType;
  }

  isEqualTo(cardType: CardType, cardNumber: string, expiration: Date) {
    return (
      this._cardType === cardType &&
      this._cardNumber === cardNumber &&
      this._expiration === expiration
    );
  }
}
