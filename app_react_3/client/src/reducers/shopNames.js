import {
  LOAD_SHOP_NAMES_SUCCESS,
  LOAD_SHOP_NAMES_FAILURE
} from "../actions/loadShopNames";
import { HIGHLIGHT_SHOP } from "../actions/highlightShop";
import { LOCATION_CHANGE } from "connected-react-router";

const initialState = {
  names: [],
  highlighted: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SHOP_NAMES_SUCCESS:
      return { ...state, names: action.shopNames };
    case LOAD_SHOP_NAMES_FAILURE:
      return state;
    case HIGHLIGHT_SHOP:
      return { ...state, highlighted: action.shopId };
    case LOCATION_CHANGE:
      return { ...state, highlighted: "" };
    default:
      return state;
  }
};
