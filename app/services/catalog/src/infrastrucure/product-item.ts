export default class Product {
  id?: number;
  name: string;
  price: number;
  oldPrice: number;
  pictureUrl: string;
  storeUnits: number;

  constructor(
    name: string,
    price: number,
    oldPrice: number,
    pictureUrl: string,
    storeUnits: number,
    id?: number
  ) {
    this.name = name;
    this.price = price;
    this.oldPrice = oldPrice;
    this.pictureUrl = pictureUrl;
    this.storeUnits = storeUnits;
    if (id) {
      this.id = id;
    }
  }
}
