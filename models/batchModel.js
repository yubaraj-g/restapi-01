const mongoose = require("mongoose")

const BatchSchema = new mongoose.Schema({
    batchName: String,
    batchId: String,
    product: Object,
    productCode: String,
    productionLines: Array,
    batchDated: String,
    batchCreatedAt: String,
    batchCreator: String
})

module.exports = mongoose.model("batch", BatchSchema)