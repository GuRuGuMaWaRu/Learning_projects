// const mongoose = require("mongoose");
const Theme = require("../models/Theme");
const Item = require("../models/Item");

exports.addTheme = async (req, res) => {
  const themeName = req.body.themeName;
  const themeNameFirstPart = themeName.slice(0, 1).toUpperCase();
  const themeNameSecondPart = themeName.slice(1).toLowerCase();
  const processedThemeName = themeNameFirstPart + themeNameSecondPart;

  await Theme.create({ name: processedThemeName });
  res.redirect("/");
};

exports.selectTheme = async (req, res) => {
  const id = req.params.id;

  const themes = await Theme.find();
  const theme = await Theme.findById(id);
  const items = await Item.find({ theme: id });
  console.log(items);
  res.render("theme", { themes: themes, theme: theme, items: items });
};
