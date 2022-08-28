const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    Code: String,
    CustomerID: mongoose.SchemaTypes.ObjectId,
    Orderdate: Date,
});

module.exports = mongoose.model("Order", orderSchema);