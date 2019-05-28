import React from "react";
import SideMenu from "../../side-menu/side-menu.container";
import SelectShopSection from "../../select-shop-section/select-shop-section.container";
import "./shopping.css";

const Shopping = () => {
  return (
    <div className="shopping-container">
      <SideMenu />
      <div className="shopping-window">
        <SelectShopSection />
      </div>
    </div>
  );
};

export default Shopping;
