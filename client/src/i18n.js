import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import weatherEn from "@locales/en/weather";
import weatherTc from "@locales/tc/weather";
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: weatherEn,
    },
    tc: {
      translation: weatherTc,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
