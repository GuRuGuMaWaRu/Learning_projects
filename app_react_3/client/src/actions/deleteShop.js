export const DELETE_SHOP = "DELETE_SHOP";
export const DELETE_SHOP_SUCCESS = "DELETE_SHOP_SUCCESS";
export const DELETE_SHOP_FAILURE = "DELETE_SHOP_FAILURE";

export const deleteShop = shopId => ({
  type: DELETE_SHOP,
  shopId
});

export const deleteShopSuccess = () => ({
  type: DELETE_SHOP_SUCCESS
});

export const deleteShopFailure = () => ({
  type: DELETE_SHOP_FAILURE
});
