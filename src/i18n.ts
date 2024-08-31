import i18n from "i18next";
import LangDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

export const supportedLngs = ["en", "pl"];

i18n
  .use(LangDetector)
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    supportedLngs,
    interpolation: {
      escapeValue: false,
    },
    detection: { order: ["navigator"] },
    backend: {
      loadPath: "/portfolio/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
