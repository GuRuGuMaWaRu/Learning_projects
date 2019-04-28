const Theme = require("../models/Theme");

exports.mainPage = async (req, res) => {
  const themes = await Theme.find();

  res.render("main", { themes: themes });
};
