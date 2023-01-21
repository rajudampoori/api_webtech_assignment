const mongoose = require("mongoose")
const Customer = require("../models/customer");
const Product  = require("../models/product")
const orderSchema = new mongoose.Schema({
    customer_id : {type : String , required : true},
    product_id : {type : String , required : true},
    product_name :{type : String , required : true},
    quantity : {type : Number,required : true  },
})

const Orders = mongoose.model("Orders",orderSchema);
module.exports = Orders;

// const orderSchema = new mongoose.Schema({
//     customer_id: Number,
//     inventory_id: Number,
//     item_name: String,
//     quantity: Number
//   });
//   const Order = mongoose.model('Order', orderSchema)