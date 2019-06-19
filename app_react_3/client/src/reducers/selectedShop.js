import {
  SELECT_SHOP,
  SELECT_SHOP_SUCCESS,
  SELECT_SHOP_FAILURE
} from "../actions/selectShop";
import { DELETE_SHOP_SUCCESS } from "../actions/deleteShop";
import { LOCATION_CHANGE } from "connected-react-router";

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
    case DELETE_SHOP_SUCCESS:
    case LOCATION_CHANGE:
      return initialState;
    default:
      return state;
  }
};
