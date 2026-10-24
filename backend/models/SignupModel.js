const userSchema = require("../schemas/SignupSchema");

const mongoose = require("mongoose");

const SignupModel = mongoose.model("signup", userSchema);

module.exports = SignupModel;
