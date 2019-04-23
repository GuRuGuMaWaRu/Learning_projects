const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/app_ejs_3", {
  useNewUrlParser: true
});

const orderSchema = new mongoose.Schema({
  date: String,
  product: String,
  quantity: Number,
  comments: String
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
