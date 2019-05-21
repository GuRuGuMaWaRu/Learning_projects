import { SAVE_SHOP_FORM, SAVE_SHOP_SUCCESS } from "../actions/saveShop";

const initialState = {
  name: "",
  type: "",
  description: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SHOP_FORM:
      return { ...action.data };
    case SAVE_SHOP_SUCCESS:
      return initialState;
    default:
      return state;
  }
};
