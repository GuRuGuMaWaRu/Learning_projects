const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  items: {
    type: [Schema.Types.ObjectId],
    ref: "Product"
  }
});

export default mongoose.model("Cart", cartSchema);
