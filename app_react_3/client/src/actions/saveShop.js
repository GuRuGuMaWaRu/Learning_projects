export const SAVE_SHOP = "SAVE_SHOP";
export const SAVE_SHOP_SUCCESS = "SAVE_SHOP_SUCCESS";
export const SAVE_SHOP_ERROR = "SAVE_SHOP_ERROR";

export const saveShop = () => ({
  type: SAVE_SHOP
});

export const saveShopSuccess = shop => ({
  type: SAVE_SHOP_SUCCESS,
  shop
});

export const saveShopError = () => ({
  type: SAVE_SHOP_ERROR
});
