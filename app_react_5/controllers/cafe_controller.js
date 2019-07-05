const Cafe = require("../models/Cafe");

module.exports = {
  index: async (req, res, next) => {
    let cafes = null;

    try {
      cafes = await Cafe.find();
    } catch (err) {
      next(err);
    }

    res.send(cafes);
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
  read: async (req, res, next) => {
    const id = req.params.id;

    const cafe = await Cafe.findOne({ _id: id });
    res.send(cafe);
  },
  update: (req, res, next) => {
    res.send();
  },
  delete: (req, res, next) => {
    res.send();
  }
};
