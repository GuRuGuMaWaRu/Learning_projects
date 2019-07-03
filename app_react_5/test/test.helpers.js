const mongoose = require("mongoose");

before(done => {
  mongoose.connect("mongodb://localhost/app_react_5_test", {
    useNewUrlParser: true
  });
  mongoose.connection
    .once("open", () => done())
    .on("error", err => console.warn(`Error: ${err}`));
});

beforeEach(done => {
  const { cafes } = mongoose.connection.collections;

  cafes
    .drop()
    .then(() => done())
    .catch(() => done());
});
