
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    phone:{
        type:String,
        requied: true,
    }
});

module.exports = mongoose.model("user", userSchema);
