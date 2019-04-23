const getDate = () => {
  const date = new Date();
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  };

  return date.toLocaleDateString("en-US", options);
};

module.exports = getDate;
