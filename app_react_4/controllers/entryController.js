const Entry = require("../models/Entry");

module.exports = {
  create: async (req, res) => {
    const entryData = req.body;

    const savedEntry = await Entry.create(entryData);

    res.send(savedEntry);
  }
};
