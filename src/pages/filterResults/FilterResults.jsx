// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useSearchAllProductsQuery } from "../../context/api/productApi";
// import ProductItem from "../../components/productItem/ProductItem";
// import "./filterResults.scss";
// import Filter from "../../components/filter/Filter";
// import Loading from "../../components/loading/Loading";

// const FilterResults = () => {
//   const location = useLocation();
//   const { oem, trt, brand, model } = location.state || {};

//   const { data, error, isLoading } = useSearchAllProductsQuery({
//     oem,
//     trt,
//     brand,
//     model,
//   });

//   console.log(data);

//   useEffect(() => {
//     window.scroll(0, 0);
//   });

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error loading results.</p>;

//   return (
//     <div className="filterResults">
//       <div className="filterResults__bg"></div>
//       <div className="filterResults__top">
//         <Filter />
//       </div>
//       <div className="container">
//         <h4 className="filterResults__title">Результат поиска:</h4>
//         {data ? (
//           <>
//             {data && data.length > 0 ? (
//               <div className="filterResults__cards">
//                 <ProductItem data={data} />
//               </div>
//             ) : (
//               <p>No results found.</p>
//             )}
//           </>
//         ) : (
//           <Loading />
//         )}
//       </div>
//     </div>
//   );
// };

// export default FilterResults;


import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSearchAllProductsQuery } from "../../context/api/productApi";
import ProductItem from "../../components/productItem/ProductItem";
import Filter from "../../components/filter/Filter";
import Loading from "../../components/loading/Loading";

import "./filterResults.scss";

const FilterResults = () => {
  const location = useLocation();
  const { oem, trt, brand, model } = location.state || {};

  const { data, error, isLoading } = useSearchAllProductsQuery({
    oem,
    trt,
    brand,
    model,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="filterResults">
      <div className="filterResults__bg" aria-hidden="true"></div>

      <section className="filterResults__top">
        <Filter />
      </section>

      <section className="container" aria-labelledby="results-heading">
        <h1 id="results-heading" className="filterResults__title">
          Результат поиска:
        </h1>

        {isLoading ? (
          <Loading />
        ) : error ? (
          <p className="error-message">Ошибка при загрузке результатов.</p>
        ) : data?.length > 0 ? (
          <div className="filterResults__cards">
            <ProductItem data={data} />
          </div>
        ) : (
          <p className="no-results-message">Ничего не найдено.</p>
        )}
      </section>
    </main>
  );
};

export default FilterResults;
