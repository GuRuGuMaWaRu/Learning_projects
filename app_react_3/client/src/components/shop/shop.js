import React from "react";
import PropTypes from "prop-types";
import Spinner from "../spinner/spinner";

const Shop = ({ isLoading, shop }) => {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h2>{shop.name}</h2>
      <h6>{shop.type}</h6>
      <p>{shop.description}</p>
    </div>
  );
};

Shop.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  shop: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string
  })
};

export default Shop;
