export const i18nRangeFormat = (val, lng, options) => {
  const rangeFormat = new Intl.NumberFormat(lng, {
    style: "currency",
    currency: options.currency,
  });

  return rangeFormat.formatRange(...val);
};

export const i18nUnitFormat = (val, lng, options) => {
  const unitFormat = new Intl.NumberFormat(lng, {
    style: "unit",
    unit: options.unit,
  });

  return unitFormat.format(val);
};
