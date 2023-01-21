const express = require("express");
const Orders = require("../models/order")
const orderroute = express.Router()

orderroute.get("/api/v1/orders", async (req, res) => {
    try {
        const allorders = await Orders.find();
        res.status(200).json({
            status: "success",
            allorders
        })
    } catch (error) {
        res.status(400).json({
            status: "failure",
            message: error.message
        })
    }
})


orderroute.get("/api/v1/orders/:id", async (req, res) => {
    try {
        const order = await Orders.findById(req.params.id);
        if (!order) {
            return res.status(400).json({
                status: "failure",
                message: "order not found"
            })
        }
        res.status(200).json({
            status: "success",
            order
        })
    } catch (error) {
        res.status(400).json({
            status: "failure",
            message: error.message
        })
    }
})

module.exports = orderroute;