import React, { useEffect } from "react";
import CatalogCard from "../../components/catalogCard/CatalogCard";

import "./razdel.scss";

const Razdel = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div className="razdel">
      <div className="razdel__bg"></div>
      <div className="container">
        <div className="razdel__info">
          <p className="razdel__info__text">РАЗДЕЛЫ</p>
          <h3 className="razdel__info__title">Каталог</h3>
        </div>
        <CatalogCard />
        <div className="razdel__info-bottom">
          <p className="razdel__info-bottom__text">Первоклассная продукция</p>
          <h3 className="razdel__info-bottom__title">
            Качество — это наш главный приоритет, наш компас, с которым мы
            сверяем каждый шаг, используя передовые технологии по обработке
            металла, сборке и покраске готовой продукции.Мы успешно налаживаем
            сотрудничество с производителями отечественного и импортного
            автопрома, изготавливая запасные части для автомобилей мировых
            брендов.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Razdel;
