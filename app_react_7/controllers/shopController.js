const Shop = require("../models/Shop");

module.exports = {
  index: async (req, res) => {
    const shops = await Shop.find({});
    res.send(shops);
  }
};
