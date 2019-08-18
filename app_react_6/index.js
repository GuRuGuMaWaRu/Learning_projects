const app = require("./app");

const server = app.listen(app.get("port"), () => {
  console.log(`Server is running on port ${server.address().port}...`);
});
