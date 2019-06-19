export const LOAD_CART_ITEMS = "LOAD_CART_ITEMS";
export const LOAD_CART_ITEMS_SUCCESS = "LOAD_CART_ITEMS_SUCCESS";
export const LOAD_CART_ITEMS_FAILURE = "LOAD_CART_ITEMS_FAILURE";

export const loadCartItems = () => ({
  type: LOAD_CART_ITEMS
});

export const loadCartItemsSuccess = cartItems => ({
  type: LOAD_CART_ITEMS_SUCCESS,
  cartItems
});

export const loadCartItemsFailure = () => ({
  type: LOAD_CART_ITEMS_FAILURE
});
