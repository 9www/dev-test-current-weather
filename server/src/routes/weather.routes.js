const express = require("express");
const { getCurrentWeather } = require("../controllers/weather.controller");

const router = express.Router();

router.get("/", getCurrentWeather);

module.exports = router;
