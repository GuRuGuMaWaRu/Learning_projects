const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: "You must provide a product name"
  },
  price: {
    type: Number,
    required: "You must provide a price"
  },
  shop: {
    type: Schema.Types.ObjectId,
    ref: "Shop"
  }
});

module.exports = mongoose.model("Product", productSchema);
