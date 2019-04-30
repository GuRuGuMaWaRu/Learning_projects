import React from "react";
import "./index.css";

const Sidebar = ({ brands }) => {
  const showBrands = () => {
    return brands.map(brand => <li key={brand.brand}>{brand.brand}</li>);
  };

  return (
    <div className="Sidebar">
      <h4>Producers</h4>
      <ul>{showBrands()}</ul>
    </div>
  );
};

export default Sidebar;
