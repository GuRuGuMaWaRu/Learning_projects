import {
  SELECT_SHOP,
  SELECT_SHOP_SUCCESS,
  SELECT_SHOP_FAILURE
} from "../actions/selectShop";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SHOP:
      return initialState;
    case SELECT_SHOP_SUCCESS:
      return action.shop;
    case SELECT_SHOP_FAILURE:
      return state;
    default:
      return state;
  }
};
