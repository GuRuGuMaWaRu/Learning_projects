export const CLEAR_CART = "CLEAR_CART";
export const CLEAR_CART_SUCCESS = "CLEAR_CART_SUCCESS";
export const CLEAR_CART_FAILURE = "CLEAR_CART_FAILURE";

export const clearCart = () => ({
  type: CLEAR_CART
});

export const clearCartSuccess = () => ({
  type: CLEAR_CART_SUCCESS
});

export const clearCartFailure = () => ({
  type: CLEAR_CART_FAILURE
});
