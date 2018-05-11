const router = require("express").Router();
const articleController = require("../../controllers/articleController");

router
  .route("/")
  .post(articleController.create)
  .get(articleController.findAll);

router
  .route("/:id")
  .delete(articleController.remove)
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

module.exports = router;
