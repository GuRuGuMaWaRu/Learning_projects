module.exports = app => {
  app.get("/cafe/index", (req, res) => {
    res.send("index");
  });
  app.post("/cafe/create", (req, res) => {
    res.send("create");
  });
  app.get("/cafe/read", (req, res) => {
    res.send("read");
  });
  app.put("/cafe/update", (req, res) => {
    res.send("update");
  });
  app.delete("/cafe/delete", (req, res) => {
    res.send("delete");
  });
};
