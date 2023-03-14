export interface IBasketItem {
    id: string;
    productId: number;
    productName: string;
    unitPrice: number;
    oldUnitPrice: number;
    quantity: number;
    pictureUrl: string;
  }
  
  export interface IBasket {
    userId: number;
    items: IBasketItem[];
  }
  
  export interface IBasketRepository {
    getBasket(userId: number): IBasket;
    updateBasket(basket: IBasket): void;
    deleteBasket(userId: number): void;
  }
  
  let usersData: IBasket[] = [];
  
  const basketExists = (basket: IBasket, _usersData: IBasket[]) => {
    return _usersData.some((u) => u.userId === basket.userId);
  };
  
  export const basketRepository: IBasketRepository = {
    getBasket(userId: number): IBasket {
      return usersData.find((u) => u.userId === userId);
    },
    updateBasket(basket: IBasket) {
      if (!basketExists(basket, usersData)) {
        usersData = [...usersData, basket];
      } else {
        usersData = usersData.map((u) => {
          if (u.userId === basket.userId) {
            return basket;
          }
          return u;
        });
      }
    },
    deleteBasket(userId: number) {
      usersData = usersData.filter((u) => u.userId !== userId);
    },
  };
  