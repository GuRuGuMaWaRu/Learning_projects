const Entry = require("../models/Entry");

module.exports = {
  index: async (req, res) => {
    const entries = await Entry.find();
    res.send(entries);
  },
  create: async (req, res) => {
    const entryData = req.body;

    const createdEntry = await Entry.create(entryData);

    res.send(createdEntry);
  }
};
