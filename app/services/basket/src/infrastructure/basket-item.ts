export default class BasketItem {
    id: string;
    productId: number;
    productName: string;
    unitPrice: number;
    oldUnitPrice: number;
    quantity: number;
    pictureUrl: string;
  
    constructor(
      id: string,
      productId: number,
      productName: string,
      unitPrice: number,
      oldUnitPrice: number,
      quantity: number,
      pictureUrl: string
    ) {
      this.id = id;
      this.productId = productId;
      this.productName = productName;
      this.unitPrice = unitPrice;
      this.oldUnitPrice = oldUnitPrice;
      this.quantity = quantity;
      this.pictureUrl = pictureUrl;
    }
  
    validate() {
      if (this.quantity < 1) {
        return { isValid: false, message: "Invalid number of units" };
      }
    }
  }
