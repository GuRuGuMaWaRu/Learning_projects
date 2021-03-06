const Picture = require("../models/picture");

module.exports = {
  save: async (req, res) => {
    if (req.file && req.file.path) {
      await Picture.deleteMany();
      Picture.create({ path: req.file.path })
        .then(result => {
          console.log(result);
          res.status(201).json({ message: "Picture saved" });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({ error: err });
        });
    }
  },
  get: async (req, res) => {
    try {
      const picture = await Picture.findOne();
      res.status(200).json({ payload: picture, message: "Picture retrieved!" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err });
    }
  }
};
