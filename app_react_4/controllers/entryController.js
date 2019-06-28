const Entry = require("../models/Entry");

module.exports = {
  create: (req, res) => {
    const entryData = req.body;
    console.log(entryData);
    res.send(entryData);
  }
};
