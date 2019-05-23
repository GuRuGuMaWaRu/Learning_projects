import React from "react";
import PropTypes from "prop-types";

const Shop = ({ shop }) => {
  if (!shop.name) {
    return null;
  }

  return (
    <div>
      <h2>{shop.name}</h2>
      <h6>Type: {shop.type}</h6>
      <p>{shop.description}</p>
    </div>
  );
};

Shop.propTypes = {
  shop: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string
  })
};

export default Shop;
