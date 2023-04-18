const express = require('express')
const router = express.Router()
const { getMillenniumProducts } = require("../controllers/millenniumProducts")

router.route("/").get(getMillenniumProducts)

module.exports = router