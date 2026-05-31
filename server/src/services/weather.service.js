const axios = require("axios");
const {
  getWeatherText,
  getWeatherIconUrl,
} = require("../utils/weatherIconMap");

const SOURCE_NAME = "Hong Kong Observatory Open Data API";

const getWeatherByLanguage = async (lang) => {
  const baseUrl = process.env.HKO_API_BASE_URL;

  const response = await axios.get(`${baseUrl}/weather.php`, {
    params: {
      dataType: "rhrread",
      lang,
    },
    timeout: 10000,
  });

  const data = response.data;

  const temperatureList = data.temperature?.data || [];

  const temperatureData =
    temperatureList.find(
      (item) =>
        item.place === "Hong Kong Observatory" || item.place === "香港天文台",
    ) || temperatureList[0];

  const iconCode = data.icon?.[0] ?? null;

  return {
    location:
      temperatureData?.place ||
      (lang === "tc" ? "香港天文台" : "Hong Kong Observatory"),
    weather: getWeatherText(iconCode, lang),
    iconCode,
    iconUrl: getWeatherIconUrl(iconCode),
    temperature: temperatureData?.value ?? null,
    unit: temperatureData?.unit || data.temperature?.unit || "C",
    updateTime: data.updateTime || null,
    source: SOURCE_NAME,
  };
};

const getCurrentWeather = async () => {
  const [tc, en] = await Promise.all([
    getWeatherByLanguage("tc"),
    getWeatherByLanguage("en"),
  ]);

  return {
    tc,
    en,
  };
};

module.exports = {
  getCurrentWeather,
};
