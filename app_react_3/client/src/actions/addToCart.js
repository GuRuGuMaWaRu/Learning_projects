export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE";

export const addToCart = itemId => ({
  type: ADD_TO_CART,
  itemId
});

export const addToCartSuccess = () => ({
  type: ADD_TO_CART_SUCCESS
});

export const addToCartFailure = () => ({
  type: ADD_TO_CART_FAILURE
});
