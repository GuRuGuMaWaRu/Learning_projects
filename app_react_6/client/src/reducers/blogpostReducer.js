const INITIAL_STATE = {
  author: "",
  title: "",
  body: "",
  comments: [],
  likes: 0,
  date: ""
};

const blogpostReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default blogpostReducer;
