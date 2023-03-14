module.exports = {
  port: process.env.PORT || 3000,
  // TODO: Read from file
  services: {
    baskethost: process.env.BASKET_HOST || "http://localhost:3001",
    cataloghost: process.env.CATALOG_HOST || "http://localhost:3002",
  },
};
