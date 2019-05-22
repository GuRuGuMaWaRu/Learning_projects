import {
  LOAD_SHOP_NAMES_SUCCESS,
  LOAD_SHOP_NAMES_ERROR
} from "../actions/loadShopNames";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SHOP_NAMES_SUCCESS:
      return action.shopNames;
    case LOAD_SHOP_NAMES_ERROR:
      return state;
    default:
      return state;
  }
};
