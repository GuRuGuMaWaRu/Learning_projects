const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const currencySchema = new Schema({
  currency: {
    type: String,
    default: "Redanian Florins"
  }
});

module.exports = mongoose.model("Currency", currencySchema);
