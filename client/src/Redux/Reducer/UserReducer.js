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

export const UserReducer = (state = { user: [] }, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
    case LOGIN_REQUEST:
      return {
        loading: true,
        isAuthenticated: false
      };
    case USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: true,
      };
    case REGISTER_USER_SUCCESS:
    case LOGIN_SUCCESS:
    case USER_SUCCESS:
      return {
        loading: false,
        isAuthenticated: true,
        user: action.payload
      };
    case REGISTER_USER_FAIL:
    case LOGIN_FAIL:
    case USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        error: action.payload
      };
    case USER_UPDATE_REQUEST:
      return {
        loading: true,
        isAuthenticated: true,
      };
    case USER_UPDATE_SUCCESS:
      return {
        loading: false,
        isAuthenticated: true,
      };
    case USER_UPDATE_FAIL:
      return {
        loading: false,
        isAuthenticated: true,
        error: action.payload
      };
    case logout_SUCCESS:
      return {
        loading: false,
        isAuthenticated: false,
        user: null
      };
    case logout_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
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