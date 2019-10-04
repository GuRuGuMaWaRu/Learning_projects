const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
  shopId: {
    type: String,
    required: true
  },
  productId: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model("cartItem", CartItemSchema);
