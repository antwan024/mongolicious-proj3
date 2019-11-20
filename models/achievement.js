const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const achievementSchema = new Schema({

    type: { type: String, required: true },
    achievementPoints: { type: Number, required: true },
    summary: String,
    date: { type: Date, default: Date.now },
    earned: Boolean

});

const Achievement = mongoose.model("Achievement", achievementSchema);

module.exports = Achievement;