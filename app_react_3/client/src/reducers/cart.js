import { ADD_TO_CART_SUCCESS } from "../actions/addToCart";

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
      const { itemId, itemPrice, itemName } = action.itemData;
      return {
        ...state,
        items: [...state.items, { itemId, itemPrice, itemName }]
      };
    default:
      return state;
  }
};
