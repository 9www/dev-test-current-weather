const getCurrentWeather = async () => {
  return {
    location: "Hong Kong",
    weather: "Cloudy",
    temperature: 25,
    unit: "C",
  };
};

module.exports = {
  getCurrentWeather,
};
