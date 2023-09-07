import uaTranslations from "./ua.json";
import enTranslations from "./en.json";
import frTranslations from "./fr.json";

const createResource = (key, translation) => ({
  [key]: {
    translation,
  },
});

export const uaResource = createResource("ua", uaTranslations);
export const enResource = createResource("en", enTranslations);
export const frResource = createResource("fr", frTranslations);
