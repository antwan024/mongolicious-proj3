const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/bestLife"
);

const eventSeed = [
  {
        eventPoints: 25,
        summary: "Attended a LiveNation event.",
        date: "2020-1-15",
  },
  {
        eventPoints: 50,
        summary: "Traveled out of state, flying with United.",
        date: "2021-2-15",
  },
  {
        eventPoints: 10,
        summary: "Went to a Comedyworks show.",
        date: "2020-3-30",
  },
  {
        eventPoints: 50,
        summary: "Watched a movie in a Regal Theater.",
        date: "2020-3-30",
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
