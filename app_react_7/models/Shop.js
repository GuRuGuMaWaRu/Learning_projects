const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  shopId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const ShopSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  products: {
    type: [ProductSchema]
  },
  tags: {
    type: [String],
    default: ["undefined"]
  }
});

module.exports = mongoose.model("shop", ShopSchema);
