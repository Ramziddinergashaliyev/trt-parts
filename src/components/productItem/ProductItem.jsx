// import React from "react";
// import Product from "../product/Product";

// const ProductItem = ({ data, isTrue }) => {
//   if (!data || data.length === 0) {
//     return (
//       <div className="no-products" role="alert" aria-live="polite">
//         Mahsulotlar topilmadi.
//       </div>
//     );
//   }

//   return (
//     <>
//       {data.map((product) => (
//         <div role="listitem" key={product?.id}>
//           <Product product={product} isTrue={isTrue} />
//         </div>
//       ))}
//     </>
//   );
// };

// export default ProductItem;


import React, { useEffect, useRef } from "react";
import Product from "../product/Product";

const ProductItem = ({ data, isTrue }) => {
  const firstProductRef = useRef(null);

  useEffect(() => {
    if (firstProductRef.current) {
      firstProductRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [data]);

  if (!data || data.length === 0) {
    return (
      <div className="no-products" role="alert" aria-live="polite">
        Mahsulotlar topilmadi.
      </div>
    );
  }

  return (
    <>
      {data.map((product, index) => (
        <div
          key={product?.id}
          role="listitem"
          ref={index === 0 ? firstProductRef : null}
        >
          <Product product={product} isTrue={isTrue} />
        </div>
      ))}
    </>
  );
};

export default ProductItem;
