import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLoading } from './loadingScreen.slice';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            return action.payload
        }
    }
})

export const setProductsThunk = () => dispatch => {
    dispatch(setLoading(true))
    axios.get('https://e-commerce-api.academlo.tech/api/v1/products')
        .then(res => dispatch(setProducts(res.data.data.products)))
        .finally(() => {
            dispatch(setLoading(false))
        })

}
// CATEGORIES
export const setCategoryThunk = (id) => dispatch => {
    dispatch(setLoading(true));
    return axios.get(`https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`)
        .then((res) => dispatch(setProducts(res.data.data.products)))
        .finally(() => dispatch(setLoading(false)));
}

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
