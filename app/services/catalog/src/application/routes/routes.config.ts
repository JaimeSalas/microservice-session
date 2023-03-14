import { Application } from "express";
import { catalogRoute } from "./catalog.route";
import { productReadsRepository, productUpdatesRepository } from "../../infrastrucure";

export const routesInit = (app: Application) => {
  app.use("/catalog", catalogRoute(productReadsRepository, productUpdatesRepository));
};
