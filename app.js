const express = require("express")
const app = express()
const connectDB = require("./db/connect")
require('dotenv').config()

const PORT = process.env.PORT || 5000
const uri = process.env.MONGODB_URI

const productsRoute = require("./routes/products")
app.get("/", (req, res) => {
    res.send("Hi, I am Yuv's Backend")
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