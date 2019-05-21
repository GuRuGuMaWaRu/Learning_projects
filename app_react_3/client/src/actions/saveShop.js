export const SAVE_SHOP_FORM = "SAVE_SHOP_FORM";
export const SAVE_SHOP_DATA = "SAVE_SHOP_DATA";
export const SAVE_SHOP_SUCCESS = "SAVE_SHOP_SUCCESS";
export const SAVE_SHOP_ERROR = "SAVE_SHOP_ERROR";

export const saveShopForm = data => ({
  type: SAVE_SHOP_FORM,
  data
});

export const saveShopData = () => ({
  type: SAVE_SHOP_DATA
});

export const saveShopSuccess = () => ({
  type: SAVE_SHOP_SUCCESS
});

export const saveShopError = () => ({
  type: SAVE_SHOP_ERROR
});
