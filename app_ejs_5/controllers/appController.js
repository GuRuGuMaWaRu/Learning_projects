const mongoose = require("mongoose");
const List = mongoose.model("List");

exports.homePage = async (req, res) => {
  const lists = await List.find();

  res.render("home", { lists: lists });
};
