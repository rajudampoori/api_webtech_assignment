
const mongoose = require("mongoose")
const express = require("express")
const bodyparser = require("body-parser");
const routers = require("./routes/routes");
const orderroute = require("./routes/order");
const productroute = require("./routes/product");
const customerroute = require("./routes/customer");
const app = express();
app.use(bodyparser())

app.get("/",(req,res)=> {
res.send("ok")
})

app.use("/",routers)
app.use("/",customerroute)
app.use("/",productroute)
app.use("/",orderroute)

mongoose.connect("mongodb://localhost/api_webtech_assignment" ).then(()=> {console.log("connected to DB")})

app.listen(3000,()=> {console.log("Server is up at 3000")})