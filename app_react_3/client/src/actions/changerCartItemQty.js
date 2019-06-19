export const CHANGE_CART_ITEM_QTY = "CHANGE_CART_ITEM_QTY";
export const CHANGE_CART_ITEM_QTY_SUCCESS = "CHANGE_CART_ITEM_QTY_SUCCESS";
export const CHANGE_CART_ITEM_QTY_FAILUTE = "CHANGE_CART_ITEM_QTY_FAILUTE";

export const changeCartItemQty = qtyChangeData => ({
  type: CHANGE_CART_ITEM_QTY,
  qtyChangeData
});

export const changeCartItemQtySuccess = qtyChangeData => ({
  type: CHANGE_CART_ITEM_QTY_SUCCESS,
  qtyChangeData
});

export const changeCartItemQtyFailure = () => ({
  type: CHANGE_CART_ITEM_QTY_FAILUTE
});
