import React from "react";
import "./index.css";

const Sidebar = ({ brands, selected }) => {
  const showBrands = () => {
    return brands.map(brand => {
      const className = `Sidebar-item ${
        brand.id === selected ? "selected" : ""
      }`;

      return (
        <li key={brand.id} className={className}>
          {brand.brand}
        </li>
      );
    });
  };

  return (
    <div className="Sidebar">
      <h4>Producers</h4>
      <ul>{showBrands()}</ul>
    </div>
  );
};

export default Sidebar;
