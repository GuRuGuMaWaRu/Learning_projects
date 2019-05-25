import {
  SELECT_SHOP,
  SELECT_SHOP_SUCCESS,
  SELECT_SHOP_FAILURE
} from "../actions/selectShop";

const initialState = {
  shopIsLoading: false,
  shopData: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SHOP:
      return {
        ...state,
        shopIsLoading: true,
        shopData: {}
      };
    case SELECT_SHOP_SUCCESS:
      return {
        ...state,
        shopIsLoading: false,
        shopData: action.shop
      };
    case SELECT_SHOP_FAILURE:
      return state;
    default:
      return state;
  }
};
