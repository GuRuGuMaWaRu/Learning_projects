const JournalItem = require("../models/JournalItem");

exports.renderJournal = async (req, res) => {
  const items = await JournalItem.find();

  res.render("main", { items });
};
