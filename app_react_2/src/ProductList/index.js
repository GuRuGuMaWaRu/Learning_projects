import React from "react";
import Product from "../Product";
import "./index.css";

const ProductList = ({ products, addToCart }) => {
  const createProductList = () => {
    return products.map(product => (
      <Product
        key={product.name}
        product={product}
        addToCart={() => addToCart(product.price)}
      />
    ));
  };

  return <div className="ProductList">{createProductList()}</div>;
};

export default ProductList;
