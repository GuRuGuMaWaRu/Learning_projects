export const SELECT_SHOP = "SELECT_SHOP";
export const SELECT_SHOP_SUCCESS = "SELECT_SHOP_SUCCESS";
export const SELECT_SHOP_FAILURE = "SELECT_SHOP_FAILURE";

export const selectShop = id => ({
  type: SELECT_SHOP,
  id
});

export const selectShopSuccess = shop => ({
  type: SELECT_SHOP_SUCCESS,
  shop
});

export const selectShopFailure = () => ({
  type: SELECT_SHOP_FAILURE
});
