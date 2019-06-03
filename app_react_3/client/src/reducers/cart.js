import { ADD_TO_CART_SUCCESS } from "../actions/addToCart";

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
        itemQty: 1
      }
    ];
  } else {
    return prevItems.map(item => {
      if (item.itemId === newItem.itemId) {
        return {
          ...item,
          itemQty: item.itemQty + 1
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
      // const { itemId, itemPrice, itemName } = action.itemData;
      return {
        ...state,
        items: addCartItem(state.items, action.itemData)
      };
    default:
      return state;
  }
};
