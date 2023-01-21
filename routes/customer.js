const express = require("express")
const Customers = require("../models/customer")
const customerroute = express.Router()

customerroute.post("/api/v1/customers", async (req, res) => {
    try {
        const customer = await Customers.create(req.body)
        res.status(400).json({
            status: "success",
            customer
        })
    } catch (error) {
        res.status(400).json({
            status: "failure",
            message: error.message
        })
    }
})

customerroute.get("/api/v1/customers", async (req, res) => {
    try {
        const customer = await Customers.find()
        console.log(customer)
        res.status(400).json({
            status: "success",
            customer
        })
    } catch (error) {
        res.status(400).json({
            status: "failure",
            message: error.message
        })
    }
})

customerroute.get("/api/v1/customers/:id", async (req, res) => {
    try {
        const customer = await Customers.findById(req.params.id)
        res.status(400).json({
            status: "success",
            customer
        })
    } catch (error) {
        res.status(400).json({
            status: "failure",
            message: error.message
        })
    }
})



module.exports = customerroute;