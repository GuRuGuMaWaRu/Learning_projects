import React from "react";

const Product = ({ product }) => {
  return (
    <div className="Product">
      <img src="https://picsum.photos/200" alt={product.name} />
      <div>{product.name}</div>
      <div>
        <strong>{product.price}</strong>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
