const Cafe = require("../models/Cafe");

module.exports = {
  index: (req, res, next) => {
    res.send();
  },
  create: async (req, res, next) => {
    const cafeData = req.body;

    try {
      await Cafe.create(cafeData);
    } catch (err) {
      next(err);
    }

    res.send();
  },
  read: (req, res, next) => {
    res.send();
  },
  update: (req, res, next) => {
    res.send();
  },
  delete: (req, res, next) => {
    res.send();
  }
};
