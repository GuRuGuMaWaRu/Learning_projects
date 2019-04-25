const mongoose = require("mongoose");
const List = mongoose.model("List");
const Item = mongoose.model("Item");

exports.getList = async (req, res) => {
  const listId = req.params.listId;

  const lists = await List.find();
  const currentList = await List.findOne({ _id: listId });
  const items = await Item.find({ list: listId });

  res.render("list", {
    currentList: currentList,
    items: items,
    editId: null,
    lists: lists
  });
};

exports.addList = async (req, res) => {
  const list = req.body.list;

  const newList = await List.create({
    name: list.slice(0, 1).toUpperCase() + list.slice(1).toLowerCase(),
    items: []
  });

  res.redirect(`/${newList._id}`);
};

exports.deleteList = async (req, res) => {
  const listId = req.params.listId;

  await List.findOneAndDelete({ _id: listId });

  res.redirect("/");
};
