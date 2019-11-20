const router = require("express").Router();
const userEventsController = require("../../controllers/userEventsController");

// Matches with "/api/events"
router.route("/")
  .get(userEventsController.findAll)
  .post(userEventsController.create)
  

// Matches with "/api/events/:id"
router
  .route("/:id")
  .get(userEventsController.findById)
  .put(userEventsController.update)
  .delete(userEventsController.remove)
  .post(userEventsController.create);

module.exports = router;
