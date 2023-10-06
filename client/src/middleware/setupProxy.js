const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/soildata',
    createProxyMiddleware({
      target: 'http://192.168.4.1',
      changeOrigin: true,
    })
  );
};