const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
  itemId: {
    type: Schema.Types.ObjectId,
    ref: "Product"
  },
  itemName: {
    type: String,
    required: true
  },
  itemPrice: {
    type: Number,
    required: true
  },
  qty: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("CartItem", cartItemSchema);
