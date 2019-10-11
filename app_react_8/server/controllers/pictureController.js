const Picture = require("../models/picture");

module.exports = {
  save: async (req, res) => {
    if (req.file && req.file.path) {
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
    res.status(200).json({
      message: "Picture retrieved!"
    });
  }
};
