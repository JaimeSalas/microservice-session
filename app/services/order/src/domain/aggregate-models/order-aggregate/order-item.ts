export default class OrderItem {
    private _productName: string;
    private _pictureUrl: string;
    private _unitPrice: number;
    private _discount: number;
    private _units: number;
  
    private _productId: number;
    get productId(): number {
      return this._productId;
    }
  
    set productId(value: number) {
      this._productId = value;
    }
  
    constructor(
      productId: number,
      productName: string,
      unitPrice: number,
      discount: number,
      pictureUrl: string,
      units: number
    ) {
      if (units <= 0) {
        throw Error("Invalid number of units");
      }
  
      if (unitPrice * units < discount) {
        throw Error("The total of order item is lower than applied discount");
      }
  
      this.productId = productId;
      this._discount = discount;
      this._pictureUrl = pictureUrl;
      this._units = units;
      this._productName = productName;
      this._unitPrice = unitPrice;
    }
  
    getPictureUir() {
      return this._pictureUrl;
    }
  
    getCurrentDiscount() {
      return this._discount;
    }
  
    getUnits() {
      return this._units;
    }
  
    getUnitPrice() {
      return this._unitPrice;
    }
  
    getOrderItemProductName() {
      return this._productName;
    }
  
    setNewDiscount(discount: number) {
      if (discount < 0) {
        throw Error("Discount is not valid");
      }
  
      this._discount = discount;
    }
  
    addUnits(units: number) {
      if (units < 0) {
        throw Error("Invalid units");
      }
  
      this._units += units;
    }
  }
  