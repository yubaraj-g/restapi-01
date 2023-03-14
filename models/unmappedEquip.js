const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    // { id, equipmentName, modelName, partNumber, serialNumber }
    equipmentId: {
        type: String
    },
    equipmentName: {
        type: String,
        // required: [true, "Name must be provided"]
    },
    modelName: {
        type: String,
        // required: [true, "Modelname must be provided"]
    },
    partNumber: {
        type: String,
        // required: [true, "Part Number must be provided"]
    },
    serialNumber: {
        type: String,
        // required: [true, "Serial Number must be provided"]
    }
})

// const UnmappedEquip = new mongoose.model("UnmappedEquip", productSchema)
module.exports = mongoose.model("UnmappedEquip", productSchema)