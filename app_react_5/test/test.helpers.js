const mongoose = require("mongoose");
const Cafe = mongoose.model("cafe");

before(done => {
  mongoose.connect("mongodb://localhost/app_react_5_test", {
    useNewUrlParser: true
  });
  mongoose.connection
    .once("open", () => done())
    .on("error", err => console.warn(`Error: ${err}`));
});

beforeEach(done => {
  Cafe.remove().then(() => {
    done();
  });
});

after(done => {
  mongoose.connection.close(() => done());
});
