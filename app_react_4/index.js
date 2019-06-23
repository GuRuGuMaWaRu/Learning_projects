const app = require("./app");

const server = app.listen(app.get("port"), () => {
  console.log(`Server is listening at ${server.address().port}`);
});
