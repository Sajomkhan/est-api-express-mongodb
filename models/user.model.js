const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("user", userSchema);