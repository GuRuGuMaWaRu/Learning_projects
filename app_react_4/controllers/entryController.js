const Entry = require("../models/Entry");

module.exports = {
  index: async (req, res) => {
    // const entries = await Entry.find();
    const entries = await Entry.aggregate([
      { $match: {} },
      { $project: { title: 1 } }
    ]);
    res.send(entries);
  },
  create: async (req, res) => {
    const entryData = req.body;

    const createdEntry = await Entry.create(entryData);

    res.send(createdEntry);
  }
};
