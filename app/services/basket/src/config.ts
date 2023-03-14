export default {
    API: {
      HOST: process.env.HOST || "0.0.0.0",
      PORT: +process.env.PORT! || 3000,
    },
  
    LOG_LEVEL: process.env.LOG_LEVEL || "debug",
  };
  