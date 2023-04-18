const mongoose = require('mongoose')

const pLineSchema = new mongoose.Schema({
    productionLineName: String,
    products: Array,
    equipmentData: Array
})

module.exports = mongoose.model("ProductionLine", pLineSchema)