const express = require('express')
const router = express.Router()

const { getUnmappedSensors } = require('../controllers/unmappedSens')

router.route("/").get(getUnmappedSensors)

module.exports = router