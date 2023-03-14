export default class Address {
    private _street: string;
    get street(): string {
      return this._street;
    }
  
    private set street(value: string) {
      this._street = value;
    }
  
    private _city: string;
    get city(): string {
      return this._city;
    }
  
    private set city(value: string) {
      this._city = value;
    }
  
    private _state: string;
    get state(): string {
      return this._state;
    }
  
    private set state(value: string) {
      this._state = value;
    }
  
    private _country: string;
    get country(): string {
      return this._country;
    }
  
    private set country(value: string) {
      this._country = value;
    }
  
    private _zipCode: string;
    get zipCode(): string {
      return this._zipCode;
    }
  
    private set zipCode(value: string) {
      this._zipCode = value;
    }
  
    constructor(
      street: string,
      city: string,
      state: string,
      country: string,
      zipCode: string
    ) {
      this.street = street;
      this.city = city;
      this.state = state;
      this.country = country;
      this.zipCode = zipCode;
    }
  }
  