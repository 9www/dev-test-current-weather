export const formatDateTime = (dateTime, language = "en") => {
  if (!dateTime) return "-";

  return new Intl.DateTimeFormat(language === "tc" ? "zh-HK" : "en-HK", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: language !== "tc",
  }).format(new Date(dateTime));
};
