import {
  NEW_ORDER_REQUEST,
  NEW_ORDER_SUCCESS,
  NEW_ORDER_FAIL,
  ORDERS_REQUEST,
  ORDERS_SUCCESS,
  ORDERS_FAIL,
  CLEAR_ERRORS
} from '../Constants/OrderConstant.js';

import axios from 'axios';

export const newOrder = (formData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_ORDER_REQUEST });
    let link = '/api/newOrder';
    const data = await axios.post(link, formData);
    dispatch({
      type: NEW_ORDER_SUCCESS,
      payload: data
    });
    localStorage.removeItem('cartItems');
    sessionStorage.removeItem('shippingAddress');
    sessionStorage.removeItem('orderInfo');
  } catch (err) {
    dispatch({
      type: NEW_ORDER_FAIL,
      payload: err.response.data.message
    });
  }
};

export const getOrders = () => async (dispatch) => {
  try {
    dispatch({ type: ORDERS_REQUEST });
    let link = '/api/orders';
    const data = await axios.get(link);
    // console.log(data)
    dispatch({
      type: ORDERS_SUCCESS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: ORDERS_FAIL,
      payload: err.response.data.message
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};