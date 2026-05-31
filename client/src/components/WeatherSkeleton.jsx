import "@styles/components/WeatherSkeleton.scss";

function WeatherSkeleton() {
  return (
    <div className="weather-skeleton">
      <div className="skeleton-title" />
      <div className="skeleton-icon" />
      <div className="skeleton-line skeleton-line-short" />
      <div className="skeleton-temperature" />

      <div className="skeleton-meta">
        <div className="skeleton-line" />
        <div className="skeleton-line" />
        <div className="skeleton-line" />
      </div>
    </div>
  );
}

export default WeatherSkeleton;
