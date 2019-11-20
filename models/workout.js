const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    workoutPoints: { type: Number, required: true },
    summary: String,
    date: { type: Date, default: Date.now },
    voucherCode: String

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;