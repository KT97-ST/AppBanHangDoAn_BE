
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Username: String,
    Password:  String,
    Name: String,
    Image:  String,
    Email:  String,
    Address: String,
    PhoneNumber: String,
    Active: Boolean,
    Permissions: String,
    RegisterDate: Date
});

module.exports = mongoose.model("User", userSchema);