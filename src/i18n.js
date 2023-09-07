import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { enResource, frResource, uaResource } from "./locales/translations";
import { i18nRangeFormat, i18nUnitFormat } from "./locales/custom-formats";

const resources = {
  ...uaResource,
  ...enResource,
  ...frResource,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ua",
  interpolation: {
    escapeValue: false,
  },
});

i18n.services.formatter.add("range", i18nRangeFormat);
i18n.services.formatter.add("units", i18nUnitFormat);

export default i18n;
