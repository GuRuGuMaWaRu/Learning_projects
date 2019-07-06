const mongoose = require("mongoose");

before(done => {
  mongoose.connect(process.env.DB_TEST, {
    useNewUrlParser: true
  });
  mongoose.connection
    .once("open", () => done())
    .on("error", err => console.warn(`Error: ${err}`));
});

beforeEach(done => {
  mongoose.connection.collections.caves.drop(() => {
    done();
  });
});
