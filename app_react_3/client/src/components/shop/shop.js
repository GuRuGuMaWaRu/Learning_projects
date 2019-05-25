import React from "react";
import PropTypes from "prop-types";
import Spinner from "../spinner/spinner";
import "./shop.css";

const Shop = ({ isLoading, shopData: { shop, products } }) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (!shop) {
    return null;
  }

  const productList = products.map(product => (
    <div className="product-list-item" key={product._id}>
      <img src="https://picsum.photos/200" alt={product.name} />
      <h6>{product.name}</h6>
      <p>Price: {product.price}</p>
    </div>
  ));

  return (
    <div className="shop-card">
      <h2>{shop.name}</h2>
      <h6>{shop.type}</h6>
      <p>{shop.description}</p>
      <h6>Products:</h6>
      <div className="product-list">{productList}</div>
    </div>
  );
};

Shop.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  shopData: PropTypes.shape({
    shop: PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      type: PropTypes.string
    }),
    products: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number
      })
    )
  })
};

export default Shop;
