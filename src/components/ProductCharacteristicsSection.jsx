import { useTranslation } from "react-i18next";

import { useFormatSettings } from "../context";

export const ProductCharacteristicsSection = ({ product }) => {
  const { t } = useTranslation();
  const { units, transformUnit } = useFormatSettings();

  const createTransformFunction = (baseUnit, targetUnit) => (value) => {
    return transformUnit({
      value,
      from: baseUnit,
      to: targetUnit,
    });
  };

  const { baseCurrency, baseSizeUnit, baseVolumeUnit, baseWeightUnit } =
    product;
  const { sizeUnit, volumeUnit, weightUnit, currency } = units;

  const transformSizeUnit = createTransformFunction(baseSizeUnit, sizeUnit);
  const transformVolumeUnit = createTransformFunction(
    baseVolumeUnit,
    volumeUnit
  );
  const transformWeightUnit = createTransformFunction(
    baseWeightUnit,
    weightUnit
  );
  const transformCurrency = createTransformFunction(baseCurrency, currency);

  return (
    <section>
      <div>
        <h4>{t("products.price-title")}</h4>
        <p>
          {t("price-range", {
            val: [
              transformCurrency(product.priceMin),
              transformCurrency(product.priceMax),
            ],
            currency: units.currency,
          })}
        </p>
      </div>
      <div>
        <h4>{t("products.characteristics.title")}</h4>
        <ul>
          <li>
            {t("products.characteristics.width", {
              val: transformSizeUnit(product.width),
              unit: units.sizeUnit,
            })}
          </li>
          <li>
            {t("products.characteristics.height", {
              val: transformSizeUnit(product.height),
              unit: units.sizeUnit,
            })}
          </li>
          <li>
            {t("products.characteristics.deep", {
              val: transformSizeUnit(product.deep),
              unit: units.sizeUnit,
            })}
          </li>
          <li>
            {t("products.characteristics.volume", {
              val: transformVolumeUnit(product.volume),
              unit: units.volumeUnit,
            })}
          </li>
          <li>
            {t("products.characteristics.weight", {
              val: transformWeightUnit(product.weight),
              unit: units.weightUnit,
            })}
          </li>
        </ul>

        <p>
          {t("products.characteristics.deliveryDate", {
            val: new Date(product.deliveryDate),
          })}
        </p>
      </div>
    </section>
  );
};
