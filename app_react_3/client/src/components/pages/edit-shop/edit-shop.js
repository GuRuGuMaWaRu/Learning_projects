import React from "react";
import SideMenu from "../../side-menu/side-menu.container";
import EditShopSection from "../../edit-shop-section/edit-shop-section.container";
import "./edit-shop.css";

const EditShop = () => {
  return (
    <div className="edit-shop-container">
      <SideMenu />
      <div className="edit-shop-window">
        <EditShopSection />
      </div>
    </div>
  );
};

export default EditShop;
