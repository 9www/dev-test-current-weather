import { useTranslation } from "react-i18next";

import { formatDateTime } from "@utils/formatDateTime";
import "@styles/components/WeatherCard.scss";

function WeatherCard({ weather, language }) {
  const { t } = useTranslation();

  return (
    <div className="weather-card">
      <h1 className="weather-title">{t("title")}</h1>

      {weather.iconUrl && (
        <img
          className="weather-icon"
          src={weather.iconUrl}
          alt={weather.weather}
        />
      )}

      <p className="weather-main">{weather.weather}</p>

      <p className="weather-temperature">
        {weather.temperature}°{weather.unit}
      </p>

      <div className="weather-meta">
        <p>
          <strong>{t("location")}:</strong> {weather.location}
        </p>

        <p>
          <strong>{t("weather")}:</strong> {weather.weather}
        </p>

        <p>
          <strong>{t("temperature")}:</strong> {weather.temperature}°
          {weather.unit}
        </p>

        <p>
          <strong>{t("updated")}:</strong>{" "}
          {formatDateTime(weather.updateTime, language)}
        </p>

        <p>
          <strong>{t("recorded")}:</strong>{" "}
          {formatDateTime(weather.recordTime, language)}
        </p>

        <p>
          <strong>{t("source")}:</strong> {weather.source}
        </p>
      </div>
    </div>
  );
}

export default WeatherCard;
