const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    Name: String,
    Image: String,
    ExportPrice: Int,
});

module.exports = mongoose.model("Product", categorySchema);