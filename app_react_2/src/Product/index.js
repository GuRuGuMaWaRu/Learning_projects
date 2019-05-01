import React from "react";
import { CurrencyContext } from "../context";
import { calculatePrice } from "../currency";

const Product = ({ product, addToCart }) => {
  return (
    <CurrencyContext.Consumer>
      {({ currency }) => (
        <div className="Product">
          <img src="https://picsum.photos/200" alt={product.name} />
          <div>{product.name}</div>
          <div>
            <strong>{calculatePrice(product.price, currency)}</strong>
          </div>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      )}
    </CurrencyContext.Consumer>
  );
};

export default Product;
