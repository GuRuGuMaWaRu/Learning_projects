const mongoose = require("mongoose");

before(done => {
  mongoose.connect(process.env.DB_TEST, { useNewUrlParser: true });
  mongoose.connection
    .once("open", () => {
      console.log("Connected to test DB.");
      done();
    })
    .on("error", err => console.warn(`Warning: ${err}`));
});

beforeEach(done => {
  mongoose.connection.collections.shops.drop(() => done());
});
