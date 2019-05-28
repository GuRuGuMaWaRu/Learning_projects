import React from "react";
import PropTypes from "prop-types";
import ShopEditForm from "../shop-edit-form/shop-edit-form";
import "./edit-shop-section.css";

const EditShopSection = ({
  isLoading,
  shopData,
  onUpdateShop,
  onDeleteShop
}) => (
  <>
    <ShopEditForm
      isLoading={isLoading}
      shopData={shopData}
      onSubmit={onUpdateShop}
    />
    <button
      className="btn btn-outline-danger delete-shop-button"
      onClick={() => onDeleteShop(shopData.shop._id)}
    >
      Delete Shop
    </button>
  </>
);

EditShopSection.propTypes = {
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
  }),
  onUpdateShop: PropTypes.func.isRequired,
  onDeleteShop: PropTypes.func.isRequired
};

export default EditShopSection;
