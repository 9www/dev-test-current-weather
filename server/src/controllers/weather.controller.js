const weatherService = require("../services/weather.service");

const getCurrentWeather = async (req, res) => {
  try {
    const weather = await weatherService.getCurrentWeather();

    return res.status(200).json({
      success: true,
      statusCode: 200,
      data: weather,
    });
  } catch (error) {
    console.error("Weather controller error:", error.message);

    res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Failed to fetch weather data",
    });
  }
};

module.exports = {
  getCurrentWeather,
};
