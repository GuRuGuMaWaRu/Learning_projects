const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  },
  shop: {
    type: Schema.Types.ObjectId,
    ref: "Shop"
  }
});

module.exports = mongoose.model("Product", productSchema);
