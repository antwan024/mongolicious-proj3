const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

    name: { type: String, required: true},
    email: { type: String, required: true},
    totalEventPoints: Number, 
    totalFoodPoints: Number, 
    totalWorkoutPoints: Number,

    userEvent: [
        {
          type: Schema.Types.ObjectId,
          ref: "Event"
        }
    ],

    userFood: [
        {
          type: Schema.Types.ObjectId,
          ref: "Food"
        }
    ],

    userExcercise: [
        {
          type: Schema.Types.ObjectId,
          ref: "Excercise"
        }
    ]





});

const User = mongoose.model("User", userSchema);

module.exports = User;