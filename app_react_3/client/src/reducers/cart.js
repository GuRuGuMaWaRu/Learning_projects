import { ADD_TO_CART_SUCCESS } from "../actions/addToCart";
import { LOAD_CART_ITEMS_SUCCESS } from "../actions/loadCartItems";
import { CHANGE_CART_ITEM_QTY_SUCCESS } from "../actions/changerCartItemQty";
import { DELETE_CART_ITEM_SUCCESS } from "../actions/deleteCartItem";
import { CLEAR_CART_SUCCESS } from "../actions/clearCart";

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

const updateCartItemQty = (cartItems, qtyChangeData) => {
  const { cartItemId, changeType } = qtyChangeData;

  return cartItems.map(cartItem => {
    if (cartItem.itemId === cartItemId) {
      return {
        ...cartItem,
        qty:
          changeType === "increase"
            ? cartItem.qty + 1
            : cartItem.qty - 1 < 0
            ? 0
            : cartItem.qty - 1
      };
    }
    return cartItem;
  });
};

const deleteCartItem = (cartItems, itemId) => {
  return cartItems.filter(cartItem => cartItem.itemId !== itemId);
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
    case CHANGE_CART_ITEM_QTY_SUCCESS:
      return {
        ...state,
        items: updateCartItemQty(state.items, action.qtyChangeData)
      };
    case DELETE_CART_ITEM_SUCCESS:
      return {
        ...state,
        items: deleteCartItem(state.items, action.itemId)
      };
    case CLEAR_CART_SUCCESS:
      return initialState;
    default:
      return state;
  }
};
