const express = require("express")
const app = express()
const connectDB = require("./db/connect")
const Product = require("./models/product")
const Unmappedeq = require("./models/unmappedEquip")
require('dotenv').config()
const cors = require("cors")

const PORT = process.env.PORT || 5000
const uri = process.env.MONGODB_URI

// middleware to grab the json object from user
app.use(express.json())
app.use(cors())

const productsRoute = require("./routes/products")
const unmappedEqRoute = require("./routes/unmappedEquipments")

app.get("/", (req, res) => {
    res.send("Hi, I am Yuv's Backend")
})
app.post("/post/product", async (req, res) => {
    const result = await Product.insert(req.body)
    res.send(result)
})
// below post request is working fine
app.post("/post/new-equipment", async (req, res) => {
    const data = new Unmappedeq(req.body)
    const result = await data.save()
    res.send(result)
})

// middleware for router
app.use("/api/products", productsRoute)
app.use("/api/unmapped-equipments", unmappedEqRoute)

const start = async () => {
    try {
        await connectDB(uri)
        app.listen(PORT, () => {
            console.log(`Server running on ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()