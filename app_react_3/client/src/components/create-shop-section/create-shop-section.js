import React from "react";
import PropTypes from "prop-types";
import ShopEditForm from "../shop-edit-form/shop-edit-form";

const CreateShopSection = ({ onSaveShop, history }) => (
  <ShopEditForm onSubmit={onSaveShop} />
);

CreateShopSection.propTypes = {
  onSaveShop: PropTypes.func.isRequired
};

export default CreateShopSection;
