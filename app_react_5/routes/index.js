module.exports = app => {
  app.get("/api/cafes", (req, res) => {
    res.send("index");
  });
  app.post("/api/cafes", (req, res) => {
    res.send("create");
  });
  app.get("/api/cafes/:id", (req, res) => {
    res.send("read");
  });
  app.put("/api/cafes/:id", (req, res) => {
    res.send("update");
  });
  app.delete("/api/cafes/:id", (req, res) => {
    res.send("delete");
  });
};
