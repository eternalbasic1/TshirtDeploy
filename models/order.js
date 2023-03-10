const mongoose = require("mongoose");
const { Schema } = mongoose;
const {ObjectId} = mongoose.Schema;

const ProductCartSchema = new Schema({
    product: {
        type:ObjectId,
        ref: "Product",
    },
    name: String,
    price: Number,
    count: Number,
})
const ProductCart = mongoose.model("ProductCart", ProductCartSchema);


const OrderSchema = new Schema({
    products : [ProductCartSchema],
    transaction_id : {},
    amount: {
        type: Number,
    },
    address: String,
    status:{
        type: String,
        default:"Recieved",
        enum:["Cancelled","Delivered","Shipped","Processing","Recieved"]
    },
    updated: Date,
    user: {
        type: ObjectId,
        ref: "User",
    }
}, {timestamps: true}

);


const Order = mongoose.model("Order", OrderSchema);

module.exports = {Order,ProductCart};