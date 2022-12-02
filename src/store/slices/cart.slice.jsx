import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setLoading } from './loadingScreen.slice';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    getCart: (state, action) => {
      return action.payload
    }
  }
})

export const cartProductsThunk = () => (dispatch) => {
  dispatch(setLoading(true));
  return axios.get(`https://e-commerce-api.academlo.tech/api/v1/cart`, getConfig())
  .then((res) => {
    dispatch(getCart(res.data.data.cart.products))
  })
  .finally(() => dispatch(setLoading(false)));
}

export const addProductThunk = (addingProduct) => (dispatch) => {
    dispatch(setLoading(true));
    return axios.post('https://e-commerce-api.academlo.tech/api/v1/cart', addingProduct, getConfig())
        .then(() => dispatch(cartProductsThunk()))
        .catch(error => console.log(error.response.data))
        .finally(() => dispatch(setLoading(false)));
}

export const checkoutThuk = () => (dispatch) => {
    dispatch(setLoading(true));
    return axios.post('https://e-commerce-api.academlo.tech/api/v1/purchases', {} , getConfig())
        .then(() => dispatch(getCart([])))
        .finally(() => dispatch(setLoading(false)));
}


export const { getCart } = cartSlice.actions;

export default cartSlice.reducer;
