const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PictureSchema = new Schema({
  path: {
    type: String
  }
});

module.exports = mongoose.model("Picture", PictureSchema);
