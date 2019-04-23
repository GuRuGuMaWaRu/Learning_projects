const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  date: String,
  product: {
    type: String,
    required: [true, "Please provide a product name."]
  },
  rating: {
    type: Number,
    max: 5,
    min: 1,
    default: 5
  },
  feedback: {
    type: String,
    maxLength: 255
  }
});

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;
