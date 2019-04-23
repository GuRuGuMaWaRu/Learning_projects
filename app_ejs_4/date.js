const getCurrentDate = () => {
  const date = new Date();
  const options = {
    hour12: false,
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };

  return date.toLocaleDateString("en-US", options);
};

module.exports = getCurrentDate;
