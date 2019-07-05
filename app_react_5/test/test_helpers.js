const mongoose = require("mongoose");

before(done => {
  mongoose.connect(
    "mongodb+srv://GuRuGu:i44iYtewBM21noYb@cluster0-z8edg.mongodb.net/app_react_5_test",
    {
      useNewUrlParser: true
    }
  );
  mongoose.connection
    .once("open", () => done())
    .on("error", err => console.warn(`Error: ${err}`));
});

beforeEach(done => {
  mongoose.connection.collections.caves.drop(() => {
    done();
  });
  // const { caves } = mongoose.connection.collections;

  // caves
  //   .drop()
  //   .then(() => done())
  //   .catch(() => done());
});

// afterEach(done => {
// const { caves } = mongoose.connection.collections;

// caves
//   .drop()
//   .then(() => done())
//   .catch(() => done());
// });

// after(done => {
//   mongoose.connection.collections.caves.drop().then(() => {
//     mongoose.connection.close(done);
//   });
// });
