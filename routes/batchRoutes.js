const express = require('express')
const router = express.Router()
const { getBatches } = require("../controllers/batchController")

router.route("/").get(getBatches)

module.exports = router