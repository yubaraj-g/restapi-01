const mongoose = require('mongoose');

const unmappedSensSchema = new mongoose.Schema({
    // { sensorName, sensorType, partNumber, parameters }
    sensorName: {
        type: String
    },
    sensorType: {
        type: String
    },
    partNumber: {
        type: String
    },
    parameters: {
        type: Array
    }
})

module.exports = mongoose.model("UnmappedSensor", unmappedSensSchema)