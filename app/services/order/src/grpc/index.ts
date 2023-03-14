import { Server, ServerCredentials } from "@grpc/grpc-js";
import { OrderingServer } from "./ordering.server";
import { OrderingService } from "./proto/ordering_grpc_pb";
import config from '../application/config';

export const serve = () => {
  const server = new Server();
  server.addService(OrderingService, new OrderingServer());
  server.bindAsync(
    `${config.GRPC.HOST}:${config.GRPC.PORT}`,
    ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        throw err;
      }
      console.log(`Listening on ${port}`);
      server.start();
    }
  );
};
