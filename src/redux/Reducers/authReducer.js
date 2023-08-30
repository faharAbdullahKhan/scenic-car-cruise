import * as types from '../types';
import initialStates from './initialStates';
const initialState = initialStates.authReducer;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LOGIN:
      return {
        ...state,
        token: action?.payload?.access_token,
        user: action?.payload?.user
      };
    case types.GET_LOGOUT:
      return {
        ...state,
        token: null,
        user: {}
      };
    default:
      return state;
  }
};

export default authReducer;
