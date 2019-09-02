const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

// load environment variables
require("dotenv").config({ path: "process.env" });

let _db;

// Function to initialize our DB
const initDb = callback => {
  if (_db) {
    console.log("Database is already initialized");
    return callback(null, _db);
  }

  // we decide if we'll be using development or test DB
  const mongoDbUrl =
    process.env.NODE_ENV === "development"
      ? process.env.DB
      : process.env.DB_TEST;

  MongoClient.connect(mongoDbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
    .then(client => {
      _db = client;
      return callback(null, _db);
    })
    .catch(err => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error("Database is not initialized!");
  }
  return _db;
};

module.exports = {
  initDb,
  getDb
};
