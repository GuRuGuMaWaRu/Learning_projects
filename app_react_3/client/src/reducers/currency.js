import { CHANGE_CURRENCY } from "../actions/changeCurrency";

const initialState = {
  rf: true,
  tc: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURRENCY:
      return {
        ...state,
        rf: action.newCurrency === "rf" ? true : false,
        tc: action.newCurrency === "tc" ? true : false
      };
    default:
      return state;
  }
}
