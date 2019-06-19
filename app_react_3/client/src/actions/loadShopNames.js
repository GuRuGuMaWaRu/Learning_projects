export const LOAD_SHOP_NAMES = "LOAD_SHOP_NAMES";
export const LOAD_SHOP_NAMES_SUCCESS = "LOAD_SHOP_NAMES_SUCCESS";
export const LOAD_SHOP_NAMES_FAILURE = "LOAD_SHOP_NAMES_FAILURE";

export const loadShopNames = () => ({
  type: LOAD_SHOP_NAMES
});

export const loadShopNamesSuccess = shopNames => ({
  type: LOAD_SHOP_NAMES_SUCCESS,
  shopNames
});

export const loadShopNamesFailure = () => ({
  type: LOAD_SHOP_NAMES_FAILURE
});
