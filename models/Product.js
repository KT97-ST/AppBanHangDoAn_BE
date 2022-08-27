const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    Name: String,
    Code: String,
    Image: String,
    ExportPrice: {
        type:mongoose.Types.Decimal128
        },
    ImportPrice:{
        type:mongoose.Types.Decimal128
        },
});

module.exports = mongoose.model("Product", productSchema);