const connectDB = require('./db/connect')
const Product = require('./models/product')
require("dotenv").config()

const ProductJson = require('./data.json')

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI)
        await Product.deleteMany()
        await Product.create(ProductJson)
        console.log("YES")
    } catch (error) {
        console.log(error)
    }
}

start()