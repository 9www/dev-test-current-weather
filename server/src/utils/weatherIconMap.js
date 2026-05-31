//WORLD WEATHER INFORMATION
//https://www.hko.gov.hk/textonly/v2/explain/wxicon_c.htm

const weatherMap = {
  50: { en: "Sunny", tc: "陽光充沛" },
  51: { en: "Sunny Periods", tc: "間有陽光" },
  52: { en: "Sunny Intervals", tc: "短暫陽光" },
  53: { en: "Sunny Periods with A Few Showers", tc: "間有陽光幾陣驟雨" },
  54: { en: "Sunny Intervals with Showers", tc: "短暫陽光有驟雨" },

  60: { en: "Cloudy", tc: "多雲" },
  61: { en: "Overcast", tc: "密雲" },
  62: { en: "Light Rain", tc: "微雨" },
  63: { en: "Rain", tc: "雨" },
  64: { en: "Heavy Rain", tc: "大雨" },
  65: { en: "Thunderstorms", tc: "雷暴" },

  70: { en: "Fine", tc: "天色良好" },
  71: { en: "Fine", tc: "天色良好" },
  72: { en: "Fine", tc: "天色良好" },
  73: { en: "Fine", tc: "天色良好" },
  74: { en: "Fine", tc: "天色良好" },
  75: { en: "Fine", tc: "天色良好" },
  76: { en: "Mainly Cloudy", tc: "大致多雲" },
  77: { en: "Mainly Fine", tc: "天色大致良好" },

  80: { en: "Windy", tc: "大風" },
  81: { en: "Dry", tc: "乾燥" },
  82: { en: "Humid", tc: "潮濕" },
  83: { en: "Fog", tc: "霧" },
  84: { en: "Mist", tc: "薄霧" },
  85: { en: "Haze", tc: "煙霞" },

  90: { en: "Hot", tc: "熱" },
  91: { en: "Warm", tc: "暖" },
  92: { en: "Cool", tc: "涼" },
  93: { en: "Cold", tc: "冷" },
};

const getWeatherText = (iconCode, lang = "en") => {
  return (
    weatherMap[iconCode]?.[lang] ||
    (lang === "tc" ? "天氣資料暫時未能提供" : "Weather information unavailable")
  );
};

const getWeatherIconUrl = (iconCode) => {
  if (!iconCode) return null;

  return `https://www.hko.gov.hk/images/HKOWxIconOutline/pic${iconCode}.png`;
};

module.exports = {
  getWeatherText,
  getWeatherIconUrl,
};
