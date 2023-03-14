import { Application } from "express";
import config from "../config";
import { logger } from "../logger";
import { createApp } from "./create-app";

const {
  API: { HOST, PORT },
} = config;

export const initServer = async () => {
  const app: Application = createApp();
  const serverAddress = `${HOST}:${PORT}`;

  app.listen(PORT, HOST, () =>
    logger.info(`Server listening on http://${serverAddress}`)
  );
};
