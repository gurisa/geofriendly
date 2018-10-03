import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const authLogout = () => {
  // remove local
  localStorage.removeItem('token');

  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const auth = (username, password) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      username: username,
      password: password
    };
    const url = 'https://g3ofriendly.gurisa.com/api/v1/auth/login'
    axios.post(url, authData)
      .then(response => {
        if (response.data.status) {
          dispatch(authSuccess(response.data.data.token.token, response.data.data.token.token));
          localStorage.setItem('token', response.data.data.token.token);
        } else {
          dispatch(authFail(response.data.message));
        }
      });
  }
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(authLogout());
    } else {
      dispatch(authSuccess(token, token));
    }
  };
};