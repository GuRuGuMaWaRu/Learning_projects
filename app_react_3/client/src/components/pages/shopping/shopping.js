import React from "react";
import SideMenu from "../../side-menu/side-menu.container";
import Shop from "../../shop/shop.container";
import "./shopping.css";

const Shopping = () => {
  return (
    <div className="shopping-container">
      <SideMenu />
      <div className="shopping-window">
        <Shop />
      </div>
    </div>
  );
};

export default Shopping;
