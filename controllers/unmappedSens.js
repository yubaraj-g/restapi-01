const UnmappedSensor = require('../models/unmappedSens')

const getUnmappedSensors = async (req, res) => {
    const allUnmappedSens = await UnmappedSensor.find(req.query)
    res.status(200).json(allUnmappedSens)
}

module.exports = { getUnmappedSensors }