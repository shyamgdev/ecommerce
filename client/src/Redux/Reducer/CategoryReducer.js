import {
  ALL_CATEGORY_REQUEST,
  ALL_CATEGORY_SUCCESS,
  ALL_CATEGORY_FAIL,
  CLEAR_ERRORS
} from '../Constants/CategoryConstant.js';

export const CategoryReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case ALL_CATEGORY_REQUEST:
      return {
        loading: true,
        categories: []
      };
    case ALL_CATEGORY_SUCCESS:
      return {
        loading: false,
        categories: action.payload.category
      };
    case ALL_CATEGORY_FAIL:
      return {
        loading: false,
        categories: action.payload
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