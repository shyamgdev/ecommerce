import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  logout_SUCCESS,
  logout_FAIL,
  CLEAR_ERRORS
} from '../Constants/UserConstant.js';

import axios from 'axios';

export const createUser = (formData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    let link = '/api/register';
    const data = await axios.post(link, formData);
    // console.log(data)
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data
    });
    dispatch(getUser());
  } catch (err) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: err.response.data.message
    });
  }
};

export const loginUser = (formData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const data = await axios.post('/api/login', formData);
    // console.log(data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    });
    dispatch(getUser());
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.message
    });
  }
};

export const getUser = () => async (dispatch) => {
  try {
    dispatch({ type: USER_REQUEST });
    const { data } = await axios.get('/api/getUser');
    dispatch({
      type: USER_SUCCESS,
      payload: data.user
    });
  } catch (err) {
    dispatch({
      type: USER_FAIL,
      payload: err.response.data.message
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({ type: USER_REQUEST });
    dispatch({
      type: logout_SUCCESS,
      payload: null
    });
  } catch (err) {
    dispatch({
      type: logout_FAIL,
      payload: err.response.data.message
    });
  }
};

export const updateProfile = (formData) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });
    const { data } = await axios.post('/api/updateProfile', formData);
    dispatch({
      type: USER_UPDATE_SUCCESS,
      payload: data.user
    });
    dispatch(getUser())
  } catch (err) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: err.response.data.message
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};