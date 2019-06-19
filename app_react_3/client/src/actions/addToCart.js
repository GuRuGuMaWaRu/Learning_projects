export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE";

export const addToCart = itemData => ({
  type: ADD_TO_CART,
  itemData
});

export const addToCartSuccess = itemData => ({
  type: ADD_TO_CART_SUCCESS,
  itemData
});

export const addToCartFailure = () => ({
  type: ADD_TO_CART_FAILURE
});
