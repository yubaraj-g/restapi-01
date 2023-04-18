const Batch = require("../models/batchModel")

const getBatches = async (req, res) => {
    const allBatches = await Batch.find(req.query)
    res.status(200).json(allBatches)
}

module.exports = { getBatches }