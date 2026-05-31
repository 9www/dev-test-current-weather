const weatherService = require("../services/weather.service");

const getCurrentWeather = async (req, res) => {
  try {
    const weather = await weatherService.getCurrentWeather();

    res.json({
      success: true,
      data: weather,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch weather data",
    });
  }
};

module.exports = {
  getCurrentWeather,
};
