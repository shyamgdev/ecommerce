import {
  NEW_ORDER_REQUEST,
  NEW_ORDER_SUCCESS,
  NEW_ORDER_FAIL,
  ORDERS_REQUEST,
  ORDERS_SUCCESS,
  ORDERS_FAIL,
  CLEAR_ERRORS
} from '../Constants/OrderConstant.js';

export const OrderReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case NEW_ORDER_REQUEST:
    case ORDERS_REQUEST:
      return {
        loading: true,
        isAuthenticated: false
      };
    case NEW_ORDER_SUCCESS:
    case ORDERS_SUCCESS:
      return {
        loading: false,
        isAuthenticated: true,
        orders: action.payload
      };
    case NEW_ORDER_FAIL:
    case ORDERS_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        error: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};