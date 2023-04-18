const BatchTemplate = require("../models/batchTemplate")

const getBatchTemplates = async (req, res) => {
    const allBatchTemplates = await BatchTemplate.find(req.query)
    res.status(200).json(allBatchTemplates)
}

module.exports = { getBatchTemplates }