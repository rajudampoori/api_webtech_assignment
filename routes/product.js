const express = require("express")
const Products = require("../models/product")
const productroute = express.Router()

productroute.post("/api/v1/products", async(req,res)=> {
try {
    const product = await Products.create(req.body)
   return res.status(400).json({
        status : "success",
     product
    })
} catch (error) {
    res.status(400).json({
        status : "failure",
        message : error.message
    })
}
})

productroute.get("/api/v1/products", async(req,res)=> {
    try {
        const product = await Products.find()
       return res.status(400).json({
            status : "success",
         product
        })
    } catch (error) {
        res.status(400).json({
            status : "failure",
            message : error.message
        })
    }
    })

productroute.get("/api/v1/products/:id", async(req,res)=> {
    try {
        const product = await Products.findById(req.params.id)
        res.status(400).json({
            status : "success",
         product
        })
    } catch (error) {
        res.status(400).json({
            status : "failure",
            message : error.message
        })
    }
    })

module.exports = productroute;