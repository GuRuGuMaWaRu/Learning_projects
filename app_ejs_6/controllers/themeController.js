exports.addTheme = (req, res) => {
  const themeName = req.body.themeName;
  console.log(themeName);
  res.redirect("/");
};
