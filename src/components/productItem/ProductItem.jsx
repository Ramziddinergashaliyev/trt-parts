import React, { useState, useMemo } from "react";
import Product from "../product/Product";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import "./productItem.scss";
import { useTranslation } from "react-i18next";

const ProductItem = ({ data, isTrue }) => {
  const [page, setPage] = useState(1);
  const { t } = useTranslation();
  const productsPerPage = 16;

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
    setPage(value);
  };

  const startIndex = (page - 1) * productsPerPage;
  const currentProducts = sortedData.slice(
    startIndex,
    startIndex + productsPerPage
  );
  
  return (
    <div className="productItem">
      <div className="productItem__cards">
        {currentProducts.map((product) => (
          <div role="listitem" key={product.id}>
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
