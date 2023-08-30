const postsReducer = {
  posts: [],
};
const authReducer = {
  token: null,
  user: {}
};
const initialStates = {
  postReducer: postsReducer,
  authReducer: authReducer,
};

export default initialStates;
