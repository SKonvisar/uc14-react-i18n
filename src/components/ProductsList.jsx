import { useTranslation } from "react-i18next";

import { ProductCharacteristicsSection } from "./ProductCharacteristicsSection";

import { products } from "../mocks/products";

export const ProductsList = () => {
  const { t } = useTranslation();

  return (
    <main>
      <ul>
        {products.map((product) => (
          <li key={`${product.id}-list-item`}>
            <div className="product-container">
              <div className="product-details">
                <div className="product-img">
                  Img of {t(`products.${product.id}.title`)}
                </div>
                <section className="product-chars">
                  <h3>{t(`products.${product.id}.title`)}</h3>
                  <ProductCharacteristicsSection product={product} />
                </section>
              </div>

              <section>
                <h4>{t("products.desctiptionTitle")}</h4>
                <p>{t(`products.${product.id}.description`)}</p>
              </section>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};
