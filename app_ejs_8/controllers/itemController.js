const JournalItem = require("../models/JournalItem");

exports.createItem = async (req, res) => {
  const { title, body } = req.body;

  await JournalItem.create({ title, body });

  res.redirect("/app");
};

exports.renderCreateItemForm = (req, res) => {
  res.render("create-item-page");
};

exports.renderItemPage = async (req, res) => {
  const { itemId } = req.params;

  const item = await JournalItem.findById(itemId);

  res.render("item-page", { item });
};

exports.deleteItem = async (req, res) => {
  const { itemId } = req.params;

  await JournalItem.deleteOne({ _id: itemId });

  res.redirect("/app");
};
