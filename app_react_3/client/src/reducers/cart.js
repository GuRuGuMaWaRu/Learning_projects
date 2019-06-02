import { ADD_TO_CART_SUCCESS } from "../actions/addToCart";

const initialState = {
  totalItems: 0,
  totalCost: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        totalItems: state.totalItems + 1,
        totalCost: state.totalCost + action.itemCost
      };
    default:
      return state;
  }
};
