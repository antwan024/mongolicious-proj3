const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({

    eventPoints: { type: Number, required: true },
    summary: String,
    date: { type: Date, default: Date.now },
    voucherCode: String

});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;