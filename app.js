const express = require("express")
const app = express()
const connectDB = require("./db/connect")
const Product = require("./models/product")
const Unmappedeq = require("./models/unmappedEquip") // for post request
const UnmappedSens = require("./models/unmappedSens") // for post request
const ProductionLine = require("./models/productionLine")
const MillenniumProduct = require("./models/millenniumProduct")
const MappedEquipment = require("./models/mappedEquip")
const Batch = require("./models/batchModel")
const BatchTemplate = require("./models/batchTemplate")
require('dotenv').config()
const cors = require("cors")

const PORT = process.env.PORT || 5000
const uri = process.env.MONGODB_URI

// middleware to grab the json object from user
app.use(express.json())
app.use(cors())

const productsRoute = require("./routes/products")
const unmappedEqRoute = require("./routes/unmappedEquipments")
const unmappedSensRoute = require("./routes/unmappedSensors")
const pLinesRoute = require("./routes/productionLines")
const mProductsRoute = require("./routes/millenniumProducts")
const mappedEquipsRoute = require("./routes/mappedEquipments")
const batchesRoute = require("./routes/batchRoutes")
const batchTemplateRoute = require("./routes/batchTemplateRoutes")

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
app.post("/post/new-sensor", async (req, res) => {
    const data = new UnmappedSens(req.body)
    const result = await data.save()
    res.send(result)
})
app.post("/post/new-production-line", async (req, res) => {
    const data = new ProductionLine(req.body)
    const result = await data.save()
    res.send(result)
})
app.post("/post/new-millennium-product", async (req, res) => {
    const data = new MillenniumProduct(req.body)
    const result = await data.save()
    res.send(result)
})
app.post("/post/new-mapped-equipment", async (req, res) => {
    const data = new MappedEquipment(req.body)
    const result = await data.save()
    res.send(result)
})
app.post("/post/new-batch", async (req, res) => {
    const data = new Batch(req.body)
    const result = await data.save()
    res.send(result)
})
app.post("/post/new-batch-template", async (req, res) => {
    const data = new BatchTemplate(req.body)
    const result = await data.save()
    res.send(result)
})

// middleware for router
app.use("/api/products", productsRoute)
app.use("/api/unmapped-equipments", unmappedEqRoute)
app.use("/api/unmapped-sensors", unmappedSensRoute)
app.use("/api/production-lines", pLinesRoute)
app.use("/api/all-millennium-products", mProductsRoute)
app.use("/api/all-mapped-equipments", mappedEquipsRoute)
app.use("/api/all-batches", batchesRoute)
app.use("/api/all-batch-templates", batchTemplateRoute)

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