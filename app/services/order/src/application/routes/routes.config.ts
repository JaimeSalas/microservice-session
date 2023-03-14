import { Application } from "express";
import { orderRoute } from "./order.route";

export const routesInit = (app: Application) => {
  app.use("/order", orderRoute());
};
