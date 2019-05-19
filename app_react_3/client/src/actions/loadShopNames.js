const LOAD_SHOP_NAMES = "LOAD_SHOP_NAMES";
const LOAD_SHOP_NAMES_SUCCESS = "LOAD_SHOP_NAMES_SUCCESS";
const LOAD_SHOP_NAMES_ERROR = "LOAD_SHOP_NAMES_ERROR";

export const loadShopNames = () => ({
  type: LOAD_SHOP_NAMES
});

export const loadShopNamesSuccess = shopNames => ({
  type: LOAD_SHOP_NAMES_SUCCESS,
  shopNames
});

export const loadShopNamesError = () => ({
  type: LOAD_SHOP_NAMES_ERROR
});
