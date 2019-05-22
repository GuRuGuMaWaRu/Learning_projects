import React from "react";
import SideMenu from "../../side-menu/side-menu.container";
import "./shopping.css";

const Shopping = () => {
  // componentDidMount() {
  //   // run a saga to get shop names (or should I move this to a side menu where shops are displayed and selected?)
  // }

  return (
    <div className="shopping-container">
      <SideMenu />
      <div className="shopping-window">Shopping</div>
    </div>
  );
};

export default Shopping;
