export const Languages = {
  UA: "ua",
  EN: "en",
  FR: "fr",
};

export const SizeUnits = {
  inch: "inch",
  cm: "centimeter",
};

export const VolumeUnits = {
  liter: "liter",
  oz: "ounce",
};

export const WeightUnits = {
  kg: "kilogram",
  pound: "pound",
};

export const Currencies = {
  USD: "USD",
  UAH: "UAH",
  EUR: "EUR",
};

export const LanguageDefaults = {
  [Languages.UA]: {
    sizeUnit: SizeUnits.cm,
    volumeUnit: VolumeUnits.liter,
    weightUnit: WeightUnits.kg,
    currency: Currencies.UAH,
  },
  [Languages.EN]: {
    sizeUnit: SizeUnits.inch,
    volumeUnit: VolumeUnits.oz,
    weightUnit: WeightUnits.pound,
    currency: Currencies.USD,
  },
  [Languages.FR]: {
    sizeUnit: SizeUnits.cm,
    volumeUnit: VolumeUnits.liter,
    weightUnit: WeightUnits.kg,
    currency: Currencies.EUR,
  },
};
