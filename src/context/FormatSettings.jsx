import { createContext, useCallback, useContext, useState } from "react";
import {
  SizeUnits,
  VolumeUnits,
  Currencies,
  WeightUnits,
  LanguageDefaults,
} from "../locales/constants";
import { useTranslation } from "react-i18next";

const FormatSettingsContext = createContext({
  units: {
    sizeUnit: SizeUnits.cm,
    volumeUnit: VolumeUnits.liter,
    weightUnit: WeightUnits.kg,
    currency: Currencies.UAH,
  },
  setFormatUnit: () => {},
  setFormatUnits: () => {},
  transformUnit: () => {},
});

const transformers = {
  [SizeUnits.cm]: {
    [SizeUnits.inch]: (cm) => cm * 0.393701,
  },
  [SizeUnits.inch]: {
    [SizeUnits.cm]: (inch) => (inch / 0.393701).toFixed(2),
  },

  [VolumeUnits.liter]: {
    [VolumeUnits.oz]: (liter) => liter * 35.27396194958,
  },
  [VolumeUnits.oz]: {
    [VolumeUnits.liter]: (oz) => (oz / 35.27396194958).toFixed(2),
  },

  [WeightUnits.kg]: {
    [WeightUnits.pound]: (kg) => 2.2 * kg,
  },
  [WeightUnits.pound]: {
    [WeightUnits.kg]: (pound) => (pound / 2.2).toFixed(2),
  },

  [Currencies.UAH]: {
    [Currencies.EUR]: (uah) => uah / 40,
    [Currencies.USD]: (uah) => uah / 37,
  },
  [Currencies.EUR]: {
    [Currencies.UAH]: (eur) => eur * 40,
    [Currencies.USD]: (eur) => eur * 1.1,
  },
  [Currencies.USD]: {
    [Currencies.EUR]: (usd) => usd * 37,
    [Currencies.USD]: (usd) => (usd / 1.1).toFixed(2),
  },
};

export const FormatSettingsProvider = ({ children }) => {
  const { i18n } = useTranslation();

  const [units, setUnitsState] = useState(
    () => LanguageDefaults[i18n.language]
  );

  const setFormatUnit = useCallback((unit, value) => {
    setUnitsState((prevUnits) => ({ ...prevUnits, [unit]: value }));
  }, []);

  const setFormatUnits = useCallback((units) => {
    setUnitsState((prevUnits) => ({ ...prevUnits, ...units }));
  }, []);

  const transformUnit = useCallback(({ from, to, value }) => {
    if (from === to) return value;

    try {
      const transformFunction = transformers[from][to];
      return transformFunction(value);
    } catch {
      return value;
    }
  }, []);

  return (
    <FormatSettingsContext.Provider
      value={{
        units,
        setFormatUnit,
        setFormatUnits,
        transformUnit,
      }}
    >
      {children}
    </FormatSettingsContext.Provider>
  );
};

export const useFormatSettings = () => {
  return useContext(FormatSettingsContext);
};
