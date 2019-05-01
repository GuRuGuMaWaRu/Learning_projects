import React from "react";
import Product from "../Product";

const ProductList = ({ products }) => {
  const createProductList = () => {
    return products.map(product => <Product product={product} />);
  };
  return <div className="ProductList">{createProductList()}</div>;
};

export default ProductList;
