const mongoose = require("mongoose");

before(done => {
  mongoose.connect(process.env.DB_TEST, { useNewUrlParser: true });
  mongoose.connection
    .once("open", () => done())
    .on("error", err => console.warn(`Warning: ${err}`));
});

beforeEach(done => {
  mongoose.connection.collections.blogposts.drop(() => {
    done();
  });
});
