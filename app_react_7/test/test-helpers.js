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
    .collection("shops")
    .drop(() => done());
});
