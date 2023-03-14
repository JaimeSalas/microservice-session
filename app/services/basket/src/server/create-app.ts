import express from "express";
import cors from "cors";
import { routesInit } from "../routes/routes.config";

export const createApp = () => {
  const app: express.Application = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  routesInit(app);

  return app;
};
