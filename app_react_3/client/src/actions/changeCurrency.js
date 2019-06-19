export const CHANGE_CURRENCY = "CHANGE_CURRENCY";

export const changeCurrency = newCurrency => ({
  type: CHANGE_CURRENCY,
  newCurrency
});
