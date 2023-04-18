const express = require('express')
const router = express.Router()

const { getProductionLines } = require("../controllers/productionLines")

router.route("/").get(getProductionLines)

module.exports = router