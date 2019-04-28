const Theme = require("../models/Theme");
const Item = require("../models/Item");

exports.saveItem = async (req, res) => {
  const { title, text, themeId } = req.body;

  await Item.create({ title: title, text: text, theme: themeId });

  res.redirect(`/theme/select/${themeId}`);
};

exports.selectItem = async (req, res) => {
  const id = req.params.id;

  const item = await Item.findById(id);
  const themes = await Theme.find();

  res.render("item", { themes: themes, item: item });
};

exports.deleteItem = async (req, res) => {
  const { itemId, themeId } = req.params;

  await Item.deleteOne({ _id: itemId });

  res.redirect(`/theme/select/${themeId}`);
};

exports.editItem = async (req, res) => {
  const id = req.params.id;

  const item = await Item.findById(id);
  const themes = await Theme.find();

  res.render("editItem", { themes: themes, item: item });
};

exports.updateItem = async (req, res) => {
  const itemId = req.params.id;
  const { title, text, themeId } = req.body;

  await Item.findOneAndUpdate(
    { _id: itemId },
    { title: title, text: text, created: Date.now() }
  );

  res.redirect(`/theme/select/${themeId}`);
};
