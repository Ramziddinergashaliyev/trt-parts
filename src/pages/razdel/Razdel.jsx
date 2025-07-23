import React, { memo, useEffect } from "react";
import CatalogCard from "../../components/catalogCard/CatalogCard";

import "./razdel.scss";

const Razdel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="razdel" aria-labelledby="razdelTitle">
      <div className="razdel__bg" aria-hidden="true"></div>
      <div className="container">
        <header className="razdel__info">
          <p className="razdel__info__text">РАЗДЕЛЫ</p>
          <h1 className="razdel__info__title" id="razdelTitle">
            Каталог
          </h1>
        </header>

        <CatalogCard />

        <section className="razdel__info-bottom" aria-labelledby="qualityTitle">
          <p className="razdel__info-bottom__text">Первоклассная продукция</p>
          <h2 className="razdel__info-bottom__title" id="qualityTitle">
            Качество — это наш главный приоритет, наш компас, с которым мы
            сверяем каждый шаг, используя передовые технологии по обработке
            металла, сборке и покраске готовой продукции. Мы успешно налаживаем
            сотрудничество с производителями отечественного и импортного
            автопрома, изготавливая запасные части для автомобилей мировых
            брендов.
          </h2>
        </section>
      </div>
    </section>
  );
};

export default memo(Razdel);
