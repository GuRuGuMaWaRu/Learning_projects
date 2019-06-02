export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE";

export const addToCart = (itemId, itemCost) => ({
  type: ADD_TO_CART,
  payload: {
    itemId,
    itemCost
  }
});

export const addToCartSuccess = itemCost => ({
  type: ADD_TO_CART_SUCCESS,
  itemCost
});

export const addToCartFailure = () => ({
  type: ADD_TO_CART_FAILURE
});
