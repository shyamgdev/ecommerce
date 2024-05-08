import {
  ADDRESS_REQUEST,
  ADDRESS_SUCCESS,
  ADDRESS_FAIL,
  NEW_ADDRESS_REQUEST,
  NEW_ADDRESS_SUCCESS,
  NEW_ADDRESS_FAIL,
  UPDATE_ADDRESS_REQUEST,
  UPDATE_ADDRESS_SUCCESS,
  UPDATE_ADDRESS_FAIL,
  CLEAR_ERRORS
} from '../Constants/AddressConstant.js';

export const AddressReducer = (state = { address: [] }, action) => {
  switch (action.type) {
    case NEW_ADDRESS_REQUEST:
    case ADDRESS_REQUEST:
    case UPDATE_ADDRESS_REQUEST:
      return {
        loading: true,
      };
    case NEW_ADDRESS_SUCCESS:
    case ADDRESS_SUCCESS:
    case UPDATE_ADDRESS_SUCCESS:
      return {
        loading: false,
        address: action.payload
      };
    case NEW_ADDRESS_FAIL:
    case ADDRESS_FAIL:
    case UPDATE_ADDRESS_FAIL:
      return {
        loading: false,
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