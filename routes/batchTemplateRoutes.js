const express = require('express')
const router = express.Router()
const { getBatchTemplates } = require("../controllers/batchTemplateController")

router.route("/").get(getBatchTemplates)

module.exports = router