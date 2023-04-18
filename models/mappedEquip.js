const mongoose = require('mongoose')

const MappedEquipmentSchema = new mongoose.Schema({
    equipmentId: String,
    equipmentName: String,
    modelName: String,
    partNumber: String,
    sensors: Array,
    serialNumber: String
})

module.exports = mongoose.model("Mapped-Equipment", MappedEquipmentSchema)