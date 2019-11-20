const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userEventSchema = new Schema({

    summary: String

});

const UserEvent = mongoose.model("UserEvent", userEventSchema);

module.exports = UserEventSchema;