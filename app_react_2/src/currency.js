export const calculatePrice = (price, currency) => {
  return currency === "Temerian Crowns"
    ? `${price} TC`
    : `${Math.ceil(price * 1.3)} RO`;
};
