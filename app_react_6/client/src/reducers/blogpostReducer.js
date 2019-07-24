const INITIAL_STATE = {
  author: "",
  title: "",
  body: "",
  comments: [],
  likes: 0,
  date: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
