export const UPDATE_SHOP = "UPDATE_SHOP";
export const UPDATE_SHOP_SUCCESS = "UPDATE_SHOP_SUCCESS";
export const UPDATE_SHOP_FAILURE = "UPDATE_SHOP_FAILURE";

export const updateShop = shopData => ({
  type: UPDATE_SHOP,
  shopData
});

export const updateShopSuccess = () => ({
  type: UPDATE_SHOP_SUCCESS
});

export const updateShopError = () => ({
  type: UPDATE_SHOP_FAILURE
});
