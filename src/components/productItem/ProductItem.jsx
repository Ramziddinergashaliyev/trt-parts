// import React from "react";
// import Product from "../product/Product";

// const ProductItem = ({ data, isTrue }) => {
//   return (
//     <>
//       {data?.map((product) => (
//         <Product product={product} isTrue={isTrue} key={product?.id} />
//       ))}
//     </>
//   );
// };

// export default ProductItem;



import React from "react";
import Product from "../product/Product";

const ProductItem = ({ data, isTrue }) => {
  if (!data || data.length === 0) {
    return (
      <div className="no-products" role="alert" aria-live="polite">
        Mahsulotlar topilmadi.
      </div>
    );
  }

  return (
    <div className="product-list" role="list" aria-label="Mahsulotlar ro‘yxati">
      {data.map((product) => (
        <div role="listitem" key={product?.id}>
          <Product product={product} isTrue={isTrue} />
        </div>
      ))}
    </div>
  );
};

export default ProductItem;
