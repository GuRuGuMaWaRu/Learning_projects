import {
  LOAD_SHOP_NAMES_SUCCESS,
  LOAD_SHOP_NAMES_ERROR
} from "../actions/loadShopNames";
import { HIGHLIGHT_SHOP } from "../actions/highlightShop";

const initialState = {
  names: [],
  highlighted: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SHOP_NAMES_SUCCESS:
      return { ...state, names: action.shopNames };
    case LOAD_SHOP_NAMES_ERROR:
      return state;
    case HIGHLIGHT_SHOP:
      return { ...state, highlighted: action.shopId };
    default:
      return state;
  }
};
