// import "dotenv/config";
import { initServer } from "./server";
import { logger } from "./logger";
import { serve } from '../grpc';
import config from './config';

const { GRPC: { ENABLED } } = config;

if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}

(async () => {
  try {
    await initServer();
    if (ENABLED) {
      serve();
    }
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
    }
  }
})();
