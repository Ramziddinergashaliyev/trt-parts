// import React, { useState, useMemo } from "react";
// import Product from "../product/Product";
// import Stack from "@mui/material/Stack";
// import Pagination from "@mui/material/Pagination";
// import "./productItem.scss";
// import { useTranslation } from "react-i18next";

// const ProductItem = ({ data, isTrue }) => {
//   const [page, setPage] = useState(1);
//   const { t } = useTranslation();
//   const productsPerPage = 16;

//   const sortedData = useMemo(() => {
//     if (!data) return [];
//     return [...data].sort((a, b) => a.id - b.id);
//   }, [data]);

//   if (sortedData.length === 0) {
//     return (
//       <div className="no-products" role="alert" aria-live="polite">
//         {t("найдены.")}
//       </div>
//     );
//   }

//   const totalPages = Math.ceil(sortedData.length / productsPerPage);

//   const handleChange = (event, value) => {
//     setPage(value);
//   };

//   const startIndex = (page - 1) * productsPerPage;
//   const currentProducts = sortedData.slice(
//     startIndex,
//     startIndex + productsPerPage
//   );
  
//   return (
//     <div className="productItem">
//       <div className="productItem__cards">
//         {currentProducts.map((product) => (
//           <div role="listitem" key={product.id}>
//             <Product product={product} isTrue={isTrue} />
//           </div>
//         ))}
//       </div>

//       {sortedData.length > productsPerPage && (
//         <Stack spacing={2} className="productItem-pagenetion">
//           <Pagination
//             count={totalPages}
//             page={page}
//             onChange={handleChange}
//             color="primary"
//             shape="rounded"
//           />
//         </Stack>
//       )}
//     </div>
//   );
// };

// export default ProductItem;

import React, { useState, useMemo, useRef, useEffect } from "react";
import Product from "../product/Product";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import "./productItem.scss";
import { useTranslation } from "react-i18next";

const ProductItem = ({ data, isTrue }) => {
  const [page, setPage] = useState(1);
  const [animKey, setAnimKey] = useState(0);
  const { t } = useTranslation();
  const productsPerPage = 16;
  const cardsRef = useRef(null);

  const sortedData = useMemo(() => {
    if (!data) return [];
    return [...data].sort((a, b) => a.id - b.id);
  }, [data]);

  if (sortedData.length === 0) {
    return (
      <div className="no-products" role="alert" aria-live="polite">
        {t("найдены.")}
      </div>
    );
  }

  const totalPages = Math.ceil(sortedData.length / productsPerPage);

  const handleChange = (event, value) => {
    if (cardsRef.current) {
      cardsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTimeout(() => {
      setPage(value);
      setAnimKey((k) => k + 1);
    }, 150);
  };

  const startIndex = (page - 1) * productsPerPage;
  const currentProducts = sortedData.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="productItem">
      <div
        key={animKey}
        className="productItem__cards"
        ref={cardsRef}
        role="list"
        aria-label="Product list"
      >
        {currentProducts.map((product) => (
          <div
            role="listitem"
            key={product.id}
            className="productItem__card-wrapper"
          >
            <Product product={product} isTrue={isTrue} />
          </div>
        ))}
      </div>

      {sortedData.length > productsPerPage && (
        <Stack spacing={2} className="productItem-pagenetion">
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChange}
            color="primary"
            shape="rounded"
          />
        </Stack>
      )}
    </div>
  );
};

export default ProductItem;