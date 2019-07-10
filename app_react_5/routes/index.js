const cafeController = require("../controllers/cafe_controller");

module.exports = app => {
  app.get("/api/cafes", cafeController.index);
  app.post("/api/cafes", cafeController.create);
  app.get("/api/cafes/:id", cafeController.read);
  app.put("/api/cafes", cafeController.update);
  app.delete("/api/cafes/:id", cafeController.delete);
};
