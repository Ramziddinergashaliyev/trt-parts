// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./product.scss";
// import { IoCreateOutline } from "react-icons/io5";
// import { AiOutlineDelete } from "react-icons/ai";
// import { useDeleteProductMutation } from "../../context/api/productApi";

// const Product = ({ product, isTrue }) => {
//   const [deleteProduct] = useDeleteProductMutation();

//   return (
//     <div className="result__card">
//       <NavLink to={`/single/${product?.id}`} className="result__card__img">
//         <img src={product?.images[0]} alt="" />
//       </NavLink>
//       {isTrue ? (
//         <div className="result__card__img__btn">
//           <button>
//             <IoCreateOutline />
//           </button>
//           <button>
//             <AiOutlineDelete />
//           </button>
//         </div>
//       ) : (
//         <></>
//       )}

//       <div className="result__card__info">
//         <p className="result__card__info-text">{product?.name}</p>
//         <p className="result__card__info-title">{product?.trtCode}</p>
//       </div>
//     </div>
//   );
// };

// export default Product;

import React from "react";
import { NavLink } from "react-router-dom";
import "./product.scss";
import { IoCreateOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { useDeleteProductMutation } from "../../context/api/productApi";

const Product = ({ product, isTrue }) => {
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async () => {
    if (window.confirm("Mahsulotni o‘chirishni xohlaysizmi?")) {
      try {
        await deleteProduct(product?.id);
      } catch (error) {
        alert("Xatolik yuz berdi");
      }
    }
  };

  return (
    <div className="result__card">
      <NavLink to={`/single/${product?.id}`} className="result__card__img">
        <img src={product?.images[0]} alt="" />
      </NavLink>
      {isTrue ? (
        <div className="result__card__img__btn">
          <button>
            <IoCreateOutline />
          </button>
          <button onClick={handleDelete}>
            <AiOutlineDelete />
          </button>
        </div>
      ) : null}

      <div className="result__card__info">
        <p className="result__card__info-text">{product?.name}</p>
        <p className="result__card__info-title">{product?.trtCode}</p>
      </div>
    </div>
  );
};

export default Product;
