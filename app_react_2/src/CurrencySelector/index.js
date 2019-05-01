import React from "react";
import "./index.css";
import { CurrencyContext } from "../context";

const CurrencySelector = () => {
  return (
    <CurrencyContext.Consumer>
      {({ toggleCurrency }) => (
        <div className="CurrencySelector">
          <label>Currency:</label>
          <select onChange={toggleCurrency} defaultValue="Redanian Orens">
            <option value="Redanian Orens">Redanian Orens</option>
            <option value="Temerian Crowns">Temerian Crowns</option>
          </select>
        </div>
      )}
    </CurrencyContext.Consumer>
  );
};

export default CurrencySelector;
