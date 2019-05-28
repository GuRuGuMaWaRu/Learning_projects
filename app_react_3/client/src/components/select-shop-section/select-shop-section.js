import React from "react";
import PropTypes from "prop-types";
import Shop from "../shop/shop";
import WithSpinner from "../with-spinner/with-spinner";

const SelectShopSection = ({ isLoading, shopData }) => {
  return (
    <WithSpinner
      isLoading={isLoading}
      hasData={shopData.shop ? true : false}
      render={() => <Shop shopData={shopData} />}
    />
  );
};

SelectShopSection.propTypes = {
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

export default SelectShopSection;
