const mongoose = require("mongoose");

const orderDetailsSchema = new mongoose.Schema({
    Code: String,
    OrderID: mongoose.SchemaTypes.ObjectId,
    ProductID: mongoose.SchemaTypes.ObjectId,
    Quantity: {
        type:Number
        },
    Orderdate: Date,
});

module.exports = mongoose.model("OrderDetails", orderDetailsSchema);