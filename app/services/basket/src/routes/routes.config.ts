import { Application } from "express";
import { basketRoute } from "./basket.route";
import { basketRepository } from '../infrastructure/basket-repository';

export const routesInit = (app: Application) => {
  app.use("/basket", basketRoute(basketRepository));
};
