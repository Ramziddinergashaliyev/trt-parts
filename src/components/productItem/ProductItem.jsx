import React, { useState } from "react";
import Product from "../product/Product";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import "./productItem.scss";

const ProductItem = ({ data, isTrue }) => {
  const [page, setPage] = useState(1);
  const productsPerPage = 4;

  if (!data || data.length === 0) {
    return (
      <div className="no-products" role="alert" aria-live="polite">
        {t("найдены.")}
      </div>
    );
  }

  const totalPages = Math.ceil(data.length / productsPerPage);
  const handleChange = (event, value) => {
    setPage(value);
  };

  

  const startIndex = (page - 1) * productsPerPage;
  const currentProducts = data.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="productItem">
      <div className="productItem__cards">
        {currentProducts.map((product) => (
          <div role="listitem" key={product?.id}>
            <Product product={product} isTrue={isTrue} />
          </div>
        ))}
      </div>
      {data.length > 4 ? (
        <>
          <Stack spacing={2} className="productItem-pagenetion">
            <Pagination
              count={totalPages}
              page={page}
              onChange={handleChange}
              color="primary"
              shape="rounded"
            />
          </Stack>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductItem;
