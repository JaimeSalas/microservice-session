import "dotenv/config";
import { initServer } from "./server";
import { logger } from "./logger";

(async () => {
  try {
    await initServer();
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
    }
  }
})();
