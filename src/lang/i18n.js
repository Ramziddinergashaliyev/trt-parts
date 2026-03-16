import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "eng",
  debug: true,
});

export default i18n;

// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// import en from "../../public/locales/en/translation.json";
// import ru from "../../public/locales/ru/translation.json";

// i18n
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: { translation: en },
//       ru: { translation: ru },
//     },
//     lng: "ru",
//     fallbackLng: "en",
//     interpolation: { escapeValue: false },
//   });

// export default i18n;
