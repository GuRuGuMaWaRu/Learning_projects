const app = require("./app");

const server = app.listen(app.get("port"), () => {
  console.log(`Server is listening on port ${server.address().port}`);
});
