const changeCurrency = e => {
  const selectedCurrency = e.value;
  window.localStorage.setItem("currency", selectedCurrency);
};

const getCurrency = () => {
  return window.localStorage.getItem("currency");
};

const calculatePrices = price => {
  const currentCurrency = getCurrency();
  return currentCurrency === "Temerian Crowns"
    ? `${price * 1.2} TC`
    : `${price} RF`;
};
