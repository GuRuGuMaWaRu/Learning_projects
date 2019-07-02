const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/api/**", {
      target: "http://localhost:5000/",
      changeOrigin: true,
      logLevel: "debug",
      onError: (err, req, res) => {
        console.log(err);
      }
    })
  );
};
