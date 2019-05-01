import React from "react";
import Product from "../Product";
import "./index.css";

const ProductList = ({ products }) => {
  const createProductList = () => {
    return products.map(product => (
      <Product key={product.name} product={product} />
    ));
  };

  return <div className="ProductList">{createProductList()}</div>;
};

export default ProductList;
