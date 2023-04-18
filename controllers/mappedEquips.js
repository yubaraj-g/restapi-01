const MappedEquipment = require("../models/mappedEquip")

const getMappedEquipments = async (req, res) => {
    const allMappedEquips = await MappedEquipment.find(req.query)
    res.status(200).json(allMappedEquips)
}

module.exports = { getMappedEquipments }