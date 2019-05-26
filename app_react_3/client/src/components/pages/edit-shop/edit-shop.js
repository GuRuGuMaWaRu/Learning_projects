import React from "react";
import SideMenu from "../../side-menu/side-menu.container";
import ShopEditForm from "../../shop-edit-form/shop-edit-form.container";
import "./edit-shop.css";

const EditShop = () => {
  return (
    <div className="edit-shop-container">
      <SideMenu />
      <div className="edit-shop-window">
        <ShopEditForm />
      </div>
    </div>
  );
};

export default EditShop;
