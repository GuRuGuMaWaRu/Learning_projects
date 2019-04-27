const mongoose = require("mongoose");
const Theme = require("../models/Theme");
// const Theme = mongoose.model("Theme");

exports.addTheme = async (req, res) => {
  const themeName = req.body.themeName;
  await Theme.create({ name: themeName });
  res.redirect("/");
};
