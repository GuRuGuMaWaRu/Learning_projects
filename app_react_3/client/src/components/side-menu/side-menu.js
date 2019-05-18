import React from "react";
import SideMenuItem from "../side-menu-item/side-menu-item";

const SideMenu = () => {
  const shopNames = ["Shop 1", "Shop 2", "Shop 3"];

  const shopList = shopNames.map(shopName => (
    <SideMenuItem shopName={shopName} />
  ));

  return <div>{shopList}</div>;
};

export default SideMenu;
