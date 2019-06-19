const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: "Please provide a product name"
  },
  price: {
    type: Number,
    required: "Please provide a product price"
  },
  shop: {
    type: Schema.Types.ObjectId,
    ref: "Shop"
  }
});

module.exports = mongoose.model("Product", productSchema);
