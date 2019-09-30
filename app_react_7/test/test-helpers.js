const db = require("../db");
const mongodb = require("mongodb");

before(done => {
  db.initDb((err, db) => {
    if (err) {
      console.log(err);
    }
    done();
  });
});

beforeEach(done => {
  db.getDb()
    .db()
    .collections((err, collections) => {
      collections.forEach(collection => {
        collection.drop();
      });
      done();
    });
  // db.getDb()
  //   .db()
  //   .collection()
  //   .drop(() => done());
});
