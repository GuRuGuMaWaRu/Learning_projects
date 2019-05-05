const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
  item: {
    type: [Schema.Types.ObjectId],
    ref: "Product"
  },
  qty: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("CartItem", cartItemSchema);
