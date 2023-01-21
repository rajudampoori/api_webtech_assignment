const express = require("express");
const Customers = require("../models/customer")
const Products = require("../models/product")
const Orders = require("../models/order")
const route = express.Router()

route.post("/api/v1/orders", async (req, res) => {
    try {
        const { customer_id, product_id, product_name, quantity } = req.body;
        const customer = await Customers.findOne({ _id: customer_id })
        if (!customer) {
          return  res.status(400).json({ status: "failure", message: "customer not found" })
        }
        const product = await Products.findOne({ _id: product_id })

        if (!product) {
            return  res.status(400).json({ status: "failure", message: "product not found" })
        }
        if (product.available_quantity < quantity) {
            return  res.status(400).json({ status: "failure", message: "out of stock" })
        }
        const totalcost = product.product_price * quantity;
        if (customer.balance < totalcost) {
            return   res.status(400).json({ status: "failure", message: "insufficient balance" })
        }
        const order = new Orders({
            customer_id: customer_id,
            product_id: product_id,
            product_name: product_name,
            quantity: quantity
        })
        await order.save()
        customer.balance -= totalcost;
        await customer.save()

        product.available_quantity -= quantity
        await product.save()

        res.status(200).json({
            status: "success",
            message: "order plced successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failure",
            message: error.message
        })
    }
})

module.exports = route;