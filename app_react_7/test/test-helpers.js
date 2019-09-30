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
    .collections((err, collections) => {
      collections.forEach(async collection => {
        await collection.drop();
      });
      done();
    });
});
