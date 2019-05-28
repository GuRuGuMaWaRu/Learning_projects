import React from "react";
import PropTypes from "prop-types";
import "./shop.css";

const Shop = ({ shopData: { shop, products } }) => {
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
