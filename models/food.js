const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({

    foodPoints: { type: Number, required: true },
    summary: String,
    date: { type: Date, default: Date.now },
    voucherCode: String

});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;