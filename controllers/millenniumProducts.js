const MillenniumProduct = require("../models/millenniumProduct")

const getMillenniumProducts = async (req, res) => {
    const allMillenniumProducts = await MillenniumProduct.find(req.query)
    res.status(200).json(allMillenniumProducts)
}

module.exports = { getMillenniumProducts }