module.exports = app => {
  app.get("/api/shopping", (req, res) => {
    console.log("Shopping!");
  });
};
