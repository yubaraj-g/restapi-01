const mongoose = require("mongoose")

const TemplateSchema = new mongoose.Schema({
    templateName: String,
    templateCreator: String,
    productName: String,
    productCode: String,
    operationsNo: Number,
    operations: Array,
    equipmentsReq: Array
})

module.exports = mongoose.model("Batch-Template", TemplateSchema)