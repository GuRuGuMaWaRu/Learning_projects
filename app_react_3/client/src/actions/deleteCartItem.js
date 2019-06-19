export const DELETE_CART_ITEM = "DELETE_CART_ITEM";
export const DELETE_CART_ITEM_SUCCESS = "DELETE_CART_ITEM_SUCCESS";
export const DELETE_CART_ITEM_FAILURE = "DELETE_CART_ITEM_FAILURE";

export const deleteCartItem = itemId => ({
  type: DELETE_CART_ITEM,
  itemId
});

export const deleteCartItemSuccess = itemId => ({
  type: DELETE_CART_ITEM_SUCCESS,
  itemId
});

export const deleteCartItemFailure = () => ({
  type: DELETE_CART_ITEM_FAILURE
});
