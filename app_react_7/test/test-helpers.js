// const mongoose = require("mongoose");
const db = require("../db");

before(done => {
  db.initDb((err, db) => {
    if (err) {
      console.log(err);
    }
    done();
  });
  // mongoose.connect(process.env.DB_TEST, { useNewUrlParser: true });
  // mongoose.connection
  //   .once("open", () => {
  //     console.log("Connected to test DB.");
  //     done();
  //   })
  //   .on("error", err => console.warn(`Warning: ${err}`));
});

beforeEach(done => {
  db.getDb()
    .db()
    .collection("shops")
    .drop(() => done());
  // mongoose.connection.collections.shops.drop(() => done());
});
