const getCurrentDate = () => {
  const date = new Date();
  const options = {
    day: "2-digit",
    month: "numeric",
    year: "numeric"
  };

  return date.toLocaleDateString("en-US", options);
};

module.exports = getCurrentDate;
