const express = require('express')
const router = express.Router()

const { getUnmappedEquips } = require("../controllers/unmappedEquips")

router.route("/").get(getUnmappedEquips)

module.exports = router