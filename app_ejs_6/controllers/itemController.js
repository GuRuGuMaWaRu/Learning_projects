const mongoose = require("mongoose");
const Theme = require("../models/Theme");
const Item = require("../models/Item");

exports.saveItem = async (req, res) => {
  const { title, text, themeId } = req.body;

  await Item.create({ title: title, text: text, theme: themeId });

  res.redirect(`/${themeId}`);
};
