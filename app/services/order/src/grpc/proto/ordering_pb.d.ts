// package: ordering
// file: ordering.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class CreateOrderRequest extends jspb.Message { 
    getBuyerid(): string;
    setBuyerid(value: string): CreateOrderRequest;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): Address | undefined;
    setAddress(value?: Address): CreateOrderRequest;

    hasPayment(): boolean;
    clearPayment(): void;
    getPayment(): Payment | undefined;
    setPayment(value?: Payment): CreateOrderRequest;
    clearItemsList(): void;
    getItemsList(): Array<BasketItem>;
    setItemsList(value: Array<BasketItem>): CreateOrderRequest;
    addItems(value?: BasketItem, index?: number): BasketItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateOrderRequest): CreateOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateOrderRequest;
    static deserializeBinaryFromReader(message: CreateOrderRequest, reader: jspb.BinaryReader): CreateOrderRequest;
}

export namespace CreateOrderRequest {
    export type AsObject = {
        buyerid: string,
        address?: Address.AsObject,
        payment?: Payment.AsObject,
        itemsList: Array<BasketItem.AsObject>,
    }
}

export class Address extends jspb.Message { 
    getCity(): string;
    setCity(value: string): Address;
    getStreet(): string;
    setStreet(value: string): Address;
    getState(): string;
    setState(value: string): Address;
    getCountry(): string;
    setCountry(value: string): Address;
    getZipcode(): string;
    setZipcode(value: string): Address;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Address.AsObject;
    static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Address;
    static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
    export type AsObject = {
        city: string,
        street: string,
        state: string,
        country: string,
        zipcode: string,
    }
}

export class Payment extends jspb.Message { 
    getCardNumber(): string;
    setCardNumber(value: string): Payment;
    getCardHolderName(): string;
    setCardHolderName(value: string): Payment;
    getCardExperiration(): string;
    setCardExperiration(value: string): Payment;
    getCardSecurityNumber(): string;
    setCardSecurityNumber(value: string): Payment;
    getCardTypeId(): number;
    setCardTypeId(value: number): Payment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payment.AsObject;
    static toObject(includeInstance: boolean, msg: Payment): Payment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payment;
    static deserializeBinaryFromReader(message: Payment, reader: jspb.BinaryReader): Payment;
}

export namespace Payment {
    export type AsObject = {
        cardNumber: string,
        cardHolderName: string,
        cardExperiration: string,
        cardSecurityNumber: string,
        cardTypeId: number,
    }
}

export class BasketItem extends jspb.Message { 
    getId(): string;
    setId(value: string): BasketItem;
    getProductid(): number;
    setProductid(value: number): BasketItem;
    getProductname(): string;
    setProductname(value: string): BasketItem;
    getUnitprice(): number;
    setUnitprice(value: number): BasketItem;
    getOldunitprice(): number;
    setOldunitprice(value: number): BasketItem;
    getQuantity(): number;
    setQuantity(value: number): BasketItem;
    getPictureurl(): string;
    setPictureurl(value: string): BasketItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BasketItem.AsObject;
    static toObject(includeInstance: boolean, msg: BasketItem): BasketItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BasketItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BasketItem;
    static deserializeBinaryFromReader(message: BasketItem, reader: jspb.BinaryReader): BasketItem;
}

export namespace BasketItem {
    export type AsObject = {
        id: string,
        productid: number,
        productname: string,
        unitprice: number,
        oldunitprice: number,
        quantity: number,
        pictureurl: string,
    }
}
