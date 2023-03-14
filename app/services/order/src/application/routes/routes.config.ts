import { Application } from "express";
import { exampleRoute } from "./example.route";

export const routesInit = (app: Application) => {
  app.use("/example", exampleRoute());
};
