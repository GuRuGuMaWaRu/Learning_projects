module.exports = {
  save: async (req, res) => {
    res.status(201).json({
      message: "Picture saved!"
    });
  },
  get: async (req, res) => {
    res.status(200).json({
      message: "Picture retrieved!"
    });
  }
};
