export const SAVE_SHOP = "SAVE_SHOP";
export const SAVE_SHOP_SUCCESS = "SAVE_SHOP_SUCCESS";
export const SAVE_SHOP_ERROR = "SAVE_SHOP_ERROR";

export const saveShop = data => ({
  type: SAVE_SHOP,
  data
});

export const saveShopSuccess = () => ({
  type: SAVE_SHOP_SUCCESS
});

export const saveShopError = () => ({
  type: SAVE_SHOP_ERROR
});
