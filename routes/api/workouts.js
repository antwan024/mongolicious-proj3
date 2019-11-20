const router = require("express").Router();
const workoutsController = require("../../controllers/workoutsController");

// Matches with "/api/books"
router.route("/")
  .get(workoutsController.findAll)
  .post(workoutsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(workoutsController.findById)
  .put(workoutsController.update)
  .delete(workoutsController.remove);

module.exports = router;