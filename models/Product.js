const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    Name: String,
    Code: String,
    Image: String,
    ExportPrice: mongoose.Decimal128,
    ImportPrice: mongoose.Decimal128,
});

module.exports = mongoose.model("Product", productSchema);