import { initServer } from "./server";
import { logger } from "./logger";

if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}

(async () => {
  try {
    await initServer();
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
    }
  }
})();
