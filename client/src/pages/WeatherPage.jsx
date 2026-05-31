import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import WeatherCard from "@components/WeatherCard";
import { getCurrentWeather } from "@services/weatherService";
import "@styles/pages/WeatherPage.scss";
import WeatherSkeleton from "@components/WeatherSkeleton";

function WeatherPage() {
  const { t, i18n } = useTranslation();

  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const currentLanguage = i18n.language === "tc" ? "tc" : "en";
  const currentWeather = weatherData?.[currentLanguage];

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setErrorMessage("");

        const response = await getCurrentWeather();

        if (response.success) {
          setWeatherData(response.data);
        } else {
          setErrorMessage("Failed to load weather data.");
        }
      } catch (error) {
        console.error("Failed to fetch weather:", error);
        setErrorMessage("Failed to load weather data.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <main className="weather-page">
      <section className="weather-section">
        <div className="language-toggle">
          <button
            type="button"
            className={currentLanguage === "en" ? "active" : ""}
            onClick={() => handleLanguageChange("en")}
          >
            {t("english")}
          </button>

          <button
            type="button"
            className={currentLanguage === "tc" ? "active" : ""}
            onClick={() => handleLanguageChange("tc")}
          >
            {t("chinese")}
          </button>
        </div>

        {loading && <WeatherSkeleton />}

        {!loading && errorMessage && (
          <p className="error-message">{t("error")}</p>
        )}

        {!loading && !errorMessage && currentWeather && (
          <WeatherCard weather={currentWeather} language={currentLanguage} />
        )}
      </section>
    </main>
  );
}

export default WeatherPage;
