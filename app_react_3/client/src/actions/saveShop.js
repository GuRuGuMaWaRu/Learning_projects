export const SAVE_SHOP = "SAVE_SHOP";
export const SAVE_SHOP_SUCCESS = "SAVE_SHOP_SUCCESS";
export const SAVE_SHOP_FAILURE = "SAVE_SHOP_FAILURE";

export const saveShop = data => ({
  type: SAVE_SHOP,
  data
});

export const saveShopSuccess = () => ({
  type: SAVE_SHOP_SUCCESS
});

export const saveShopFailure = () => ({
  type: SAVE_SHOP_FAILURE
});
