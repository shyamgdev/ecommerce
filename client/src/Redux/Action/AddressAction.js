import {
  NEW_ADDRESS_REQUEST,
  NEW_ADDRESS_SUCCESS,
  NEW_ADDRESS_FAIL,
  ADDRESS_REQUEST,
  ADDRESS_SUCCESS,
  ADDRESS_FAIL,
  UPDATE_ADDRESS_REQUEST,
  UPDATE_ADDRESS_SUCCESS,
  UPDATE_ADDRESS_FAIL,
  CLEAR_ERRORS
} from '../Constants/AddressConstant.js';

import axios from 'axios';

export const newAddress = (formData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_ADDRESS_REQUEST });
    let link = '/api/newAddress';
    const data = await axios.post(link, formData);
    // console.log(data)
    dispatch({
      type: NEW_ADDRESS_SUCCESS,
      payload: data
    });
    dispatch(getAllAddress());
  } catch (err) {
    dispatch({
      type: NEW_ADDRESS_FAIL,
      payload: err.response.data.message
    });
  }
};

export const getAllAddress = () => async (dispatch) => {
  try {
    dispatch({ type: ADDRESS_REQUEST });
    const { data } = await axios.get('/api/address');
    dispatch({
      type: ADDRESS_SUCCESS,
      payload: data.address
    });
  } catch (err) {
    dispatch({
      type: ADDRESS_FAIL,
      payload: err.response.data.message
    });
  }
};

export const updateAddress = (formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ADDRESS_REQUEST });
    const { data } = await axios.post('/api/updateAddress', formData);
    dispatch({
      type: UPDATE_ADDRESS_SUCCESS,
      payload: data.user
    });
    dispatch(getAllAddress());
  } catch (err) {
    dispatch({
      type: UPDATE_ADDRESS_FAIL,
      payload: err.response.data.message
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};