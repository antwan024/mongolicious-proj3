const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost/bestLife"
);

const userSeed = [
    {
        name: "Antwan DuChez",
        email: "antwan@yomomashouse.com",
        password:"123",
        totalEventPoints: 200, 
        totalFoodPoints: 400, 
        totalWorkoutPoints: 100,

    },
    {
        name: "Jillian Anderson",
        email: "jillfunk@yahoo.com",
        password:"123",
        totalEventPoints: 150, 
        totalFoodPoints: 225, 
        totalWorkoutPoints: 350,
    },
    {
        name: "Jack Sparrow",
        email: "antwan@yomomashouse.com",
        password:"123",
        totalEventPoints: 200, 
        totalFoodPoints: 400, 
        totalWorkoutPoints: 100,
    },
    {
        name: "Dwayne Johnson",
        email: "therock@badass.com",
        password:"123",
        totalEventPoints: 575, 
        totalFoodPoints: 450, 
        totalWorkoutPoints: 1000,
    }
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
