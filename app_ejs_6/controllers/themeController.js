const mongoose = require("mongoose");
const Theme = require("../models/Theme");
// const Theme = mongoose.model("Theme");

exports.addTheme = async (req, res) => {
  const themeName = req.body.themeName;
  const themeNameFirstPart = themeName.slice(0, 1).toUpperCase();
  const themeNameSecondPart = themeName.slice(1).toLowerCase();
  const processedThemeName = themeNameFirstPart + themeNameSecondPart;

  await Theme.create({ name: processedThemeName });
  res.redirect("/");
};
