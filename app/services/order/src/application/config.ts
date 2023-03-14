export default {
    API: {
      HOST: process.env.HOST || "0.0.0.0",
      PORT: +process.env.PORT! || 3000,
    },

    GRPC: {
      HOST: process.env.GRPC_HOST || "localhost",
      PORT: process.env.GRPC_PORT || "5000",
      ENABLED: (process.env.GRPC_ENABLED === "true") || true
    },
  
    LOG_LEVEL: process.env.LOG_LEVEL || "debug",
  };
  