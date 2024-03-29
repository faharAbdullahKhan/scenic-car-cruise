import * as types from '../types';
import { get, post } from '../../Api/index';
import { endpoints } from '../../Api/configs';

export const login = data => {
  return async dispatch => {
    try {
      const response = await post(
        endpoints.login,
        data,
        true
      );
      dispatch({ type: types.GET_LOGIN, payload: response });
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};

export const register = data => {
  return async dispatch => {
    try {
      const response = await post(
        endpoints.register,
        data,
        true
      );
      // dispatch({ type: types.GET_LOGIN, payload: response });
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};

export const logout = () => {
  return async dispatch => {
    try {
      const response = await post(
        endpoints.logout
      );
      dispatch({ type: types.GET_LOGOUT });
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
