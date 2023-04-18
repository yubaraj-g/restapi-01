const mongoose = require('mongoose')

const mProductSchema = new mongoose.Schema({
    productName: String,
    productModel: String,
    productId: String
})

module.exports = mongoose.model("MillenniumProduct", mProductSchema)