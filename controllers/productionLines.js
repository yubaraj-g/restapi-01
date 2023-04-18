const ProductionLine = require("../models/productionLine")

const getProductionLines = async (req, res) => {
    const allProductionLines = await ProductionLine.find(req.query)
    res.status(200).json(allProductionLines)
}

module.exports = { getProductionLines }