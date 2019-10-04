const db = require("../db");

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
    .collections(async (err, collections) => {
      await collections.forEach(collection => {
        collection.drop();
      });
      done();
    });
});
