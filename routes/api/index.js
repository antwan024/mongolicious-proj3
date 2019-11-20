const router = require("express").Router();
const workoutRoutes = require("./workouts");
const eventRoutes = require("./events");
const foodRoutes = require("./foods");
const achievementRoutes = require("./achievements");
const userEventsRoutes = require("./userEvents");


router.use("/workouts", workoutRoutes);
router.use("/events", eventRoutes);
router.use("/foods", foodRoutes);
router.use("/achievements", achievementRoutes);
router.use("/userEvents", userEventsRoutes);

module.exports = router;
