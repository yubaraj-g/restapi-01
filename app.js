const express = require("express")
const app = express()
const connectDB = require("./db/connect")
const Product = require("./models/product")
require('dotenv').config()

const PORT = process.env.PORT || 5000
const uri = process.env.MONGODB_URI

// middleware to grab the json object from user
app.use(express.json())

const productsRoute = require("./routes/products")

app.get("/", (req, res) => {
    res.send("Hi, I am Yuv's Backend")
})
app.post("/post/product", async (req, res) => {
    const result = await Product.insert(req.body)
    res.send(result)
})

// middleware for router
app.use("/api/products", productsRoute)

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