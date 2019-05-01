import React from "react";
import "./index.css";

const CurrencySelector = () => {
  return (
    <div className="CurrencySelector">
      <label>Currency:</label>
      <select>
        <option>Redanian Orens</option>
        <option>Temerian Crowns</option>
      </select>
    </div>
  );
};

export default CurrencySelector;
