const express = require("express");
const router = express.Router();
const appController = require("../controllers/blogpostController");
const commentController = require("../controllers/commentController");

router.use((req, res, next) => {
  console.log(`Time: ${Date.now()}`);
  next();
});

router.get("/blogposts", appController.index);
router.post("/blogposts", appController.create);
router.get("/blogposts/:id", appController.read);
router.put("/blogposts/like/:id", appController.updateLike);
router.put("/blogposts/:id", appController.update);
router.delete("/blogposts/:id", appController.destroy);

router.post("/blogposts/comment", commentController.create);
router.put(
  "/blogposts/:blogpostId/comment/:commentId",
  commentController.update
);
router.delete(
  "/blogposts/:blogpostId/comment/:commentId",
  commentController.delete
);

module.exports = router;
