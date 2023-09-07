import { useTranslation } from "react-i18next";

import { LanguageDefaults, Languages } from "../locales/constants";
import { useFormatSettings } from "../context";

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const { setFormatUnits } = useFormatSettings();

  const handleLanguageChange = (e) => {
    const targetLang = e.target.value;
    i18n.changeLanguage(targetLang);
    setFormatUnits(LanguageDefaults[targetLang]);
  };

  return (
    <div>
      <label htmlFor="language-selector">
        <h3>{t("language-selector.title")}</h3>
      </label>

      <select
        id="language-selector"
        value={i18n.language}
        onChange={handleLanguageChange}
      >
        {Object.values(Languages).map((langKey) => (
          <option key={`lang-option-${langKey}`} value={langKey}>
            {t(`language-selector.options.${langKey}`)}
          </option>
        ))}
      </select>
    </div>
  );
};
