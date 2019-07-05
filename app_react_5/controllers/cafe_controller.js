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
  update: async (req, res, next) => {
    const cafeData = req.body;

    const updatedCafe = await Cafe.findByIdAndUpdate(
      cafeData.id,
      {
        title: req.body.title,
        description: req.body.description
      },
      { new: true }
    );

    res.send(updatedCafe);
  },
  delete: async (req, res, next) => {
    const id = req.params.id;

    await Cafe.deleteOne({ _id: id });

    res.send();
  }
};
