const app = require("./app");

const server = app.listen(app.get("port"), () => {
  console.log(`Serve is listening at ${server.address().port}`);
});
