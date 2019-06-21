const JournalItem = require("../models/JournalItem");

exports.createItem = async (req, res) => {
  const { title, body } = req.body;

  await JournalItem.create({ title, body });

  res.redirect("/app");
};
