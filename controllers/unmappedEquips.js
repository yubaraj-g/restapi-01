const UnmappedEquip = require("../models/unmappedEquip")

const getUnmappedEquips = async (req, res) => {
    // const { equipmentId, equipmentName, modelName, partNumber, serialNumber } = req.query
    // const queryObj = {}

    // if (equipmentId) {
    //     queryObj.equipmentId = equipmentId
    // }
    // if (equipmentName) {
    //     queryObj.equipmentName = { $regex: equipmentName, $options: 'i' }
    // }
    // if (modelName) {
    //     queryObj.modelName = modelName
    // }
    // if (partNumber) {
    //     queryObj.partNumber = partNumber
    // }
    // if (serialNumber) {
    //     queryObj.serialNumber = serialNumber
    // }

    // let defaultQuery = UnmappedEquip.find(req.query)
    const allUnmappedEq = await UnmappedEquip.find(req.query)
    res.status(200).json(allUnmappedEq)
}

module.exports = { getUnmappedEquips }