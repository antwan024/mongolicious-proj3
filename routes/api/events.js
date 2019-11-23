const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");
const userController = require("../../controllers/userController");

// Matches with "/api/events"
router.route("/")
  .get(eventsController.findAll)
  .post(eventsController.create);

// Matches with "/api/user"
router.route("/user/:id")
  .get(eventsController.findById)
  .post(eventsController.create);
  

// Matches with "/api/events/:id"
router
  .route("/:id")
  .get(eventsController.findById)
  .put(eventsController.update)
  .delete(eventsController.remove);

// Matches with "/api/events/addPoints"
router
    .route("/addPoints")
    // .get(eventsController.findAll)
    .post(eventsController.addPoints);
  

module.exports = router;
