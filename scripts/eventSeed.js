const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/bestLife"
);

const eventSeed = [
  {
        eventPoints: 250,
        summary: "Attended a LiveNation event.",
        date: "10/31/20",
        sponsor: "livenation"
  },
  {
        eventPoints: 500,
        summary: "Traveled with United.",
        date: "1/3/21",
        sponsor: "united"
  },
  {
        eventPoints: 100,
        summary: "Went to a Comedyworks show.",
        date: "5/21/21",
        sponsor: "comedyworks"
  },
  {
        eventPoints: 50,
        summary: "Watched a movie in a Regal Theater.",
        date: "5/30/20",
        sponsor: "regal"
  },
  {
        eventPoints: 100,
        summary: "Went to a Comedyworks show.",
        date: "10/31/20",
        sponsor: "comedyworks"
  },
  {
        eventPoints: 10,
        summary: "1-hour workout at 24-Hour Fitness.",
        date: "2020-3-30",
        sponsor: "24hour"
  },
  {
      eventPoints: 50,
      summary: "Did a CorePower Yoga Session.",
      date: "2020-3-30",
      sponsor: "corepower"
  }
];

db.Event
    .remove({})
    .then(() => db.Event.collection.insertMany(eventSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
