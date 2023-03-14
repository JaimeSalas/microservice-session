const { services } = require("../config");
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
  basketproxy: createProxyMiddleware({
    target: services.baskethost,
    changeOrigin: true,
    logger: console,
  }),
};
