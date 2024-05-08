import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO
} from '../Constants/CartConstant.js';

import axios from 'axios';

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  let link = `/api/getproductDetails/${id}`;
  const { data } = await axios.get(link);
  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.image.url,
      stock: data.product.stock,
      quantity,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

};

export const removeCartItem = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

};