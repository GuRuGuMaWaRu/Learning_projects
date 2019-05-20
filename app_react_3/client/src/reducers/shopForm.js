import { SAVE_SHOP_FORM } from "../actions/saveShop";

const initialState = {
  name: "",
  type: "",
  description: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SHOP_FORM:
      return { ...action.data };
    default:
      return state;
  }
};
