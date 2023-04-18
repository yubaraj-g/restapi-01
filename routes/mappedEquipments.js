const express = require('express')
const router = express.Router()
const { getMappedEquipments } = require("../controllers/mappedEquips")

router.route("/").get(getMappedEquipments)

module.exports = router