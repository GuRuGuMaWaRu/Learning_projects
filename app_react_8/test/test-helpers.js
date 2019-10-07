const mongoose = require("mongoose");

before(done => {
  mongoose.connect(process.env.DB_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection
    .once("open", () => {
      done();
    })
    .on("error", err => {
      console.warn(`Warning: ${err}`);
    });
});

beforeEach(done => {
  mongoose.connection.collections.pictures.drop(() => {
    done();
  });
});
