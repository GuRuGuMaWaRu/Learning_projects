import { getCafesAction, getCafeAction } from "../actions";

const INIT_STATE = {
  allCafes: [],
  selectedCafe: {}
};

const cafeReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case getCafesAction.GET_CAFES_SUCCESS:
      return {
        ...state,
        allCafes: action.cafes
      };
    case getCafeAction.GET_CAFE_SUCCESS:
      return {
        ...state,
        selectedCafe: action.cafe
      };
    default:
      return state;
  }
};

export default cafeReducer;
