const mongoose = require("mongoose");
const List = mongoose.model("List");
const Item = mongoose.model("Item");

exports.addItem = async (req, res) => {
  const { listId, createdItem } = req.body;
  const currentList = await List.findOne({ _id: listId });

  await Item.create({ name: createdItem, list: listId });

  res.redirect(`/${listId}`);
};

exports.deleteItem = async (req, res) => {
  const { itemId, listId } = req.params;

  await Item.findOneAndDelete({ _id: itemId });

  res.redirect(`/${listId}`);
};

exports.editItem = async (req, res) => {
  const { itemId, listId } = req.params;
  const currentList = await List.findOne({ _id: listId });
  const lists = await List.find();
  const items = await Item.find({ list: listId });

  res.render("list", {
    currentList: currentList,
    items: items,
    editId: itemId,
    lists: lists
  });
};

exports.updateItem = async (req, res) => {
  const itemId = req.params.itemId;
  const { listId, item } = req.body;

  await Item.findOneAndUpdate({ _id: itemId }, { name: item });

  const lists = await List.find();
  const items = await Item.find({ list: listId });
  const currentList = await List.findOne({ _id: listId });

  res.render("list", {
    currentList: currentList,
    items: items,
    editId: null,
    lists: lists
  });
};

exports.finishItem = async (req, res) => {
  const itemId = req.params.id;
  const { listId, done } = req.body;

  await Item.findOneAndUpdate(
    { _id: itemId },
    { finished: done ? true : false }
  );

  const lists = await List.find();
  const items = await Item.find({ list: listId });
  const currentList = await List.findOne({ _id: listId });

  res.render("list", {
    currentList: currentList,
    items: items,
    editId: null,
    lists: lists
  });
};
