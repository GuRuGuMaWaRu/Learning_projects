import { ADD_TO_CART_SUCCESS } from "../actions/addToCart";
import { LOAD_CART_ITEMS_SUCCESS } from "../actions/loadCartItems";

const initialState = {
  items: []
};

const addCartItem = (prevItems, newItem) => {
  const isNewItem = prevItems.every(
    prevItem => prevItem.itemId !== newItem.itemId
  );

  if (isNewItem) {
    return [
      ...prevItems,
      {
        ...newItem,
        qty: 1
      }
    ];
  } else {
    return prevItems.map(item => {
      if (item.itemId === newItem.itemId) {
        return {
          ...item,
          qty: item.qty + 1
        };
      } else {
        return item;
      }
    });
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        items: addCartItem(state.items, action.itemData)
      };
    case LOAD_CART_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.cartItems
      };
    default:
      return state;
  }
};
