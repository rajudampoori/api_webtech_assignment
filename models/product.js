const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    product_id : {type : String,required : true},
    product_type : {type : String,required : true},
    product_name : {type : String,required : true},
    product_price : {type : Number,required : true},
    available_quantity : {type : Number, required: true}
})

const Product = mongoose.model("Product",productSchema);
module.exports = Product;

// const productSchema = new mongoose.Schema({
//     product_id: Number,
//     product_type: String,
//     product_name: String,
//     product_price: Number,
//     available_quantity: Number
//   });
//   const Product = mongoose.model('Product', productSchema);