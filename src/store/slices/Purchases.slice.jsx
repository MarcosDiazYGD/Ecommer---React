import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setLoading } from './loadingScreen.slice';

export const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
      getPurchases: (state, action) => {
        return action.payload
      }

    }
})

export const setPurchasesThunk = () => (dispatch) => {
    dispatch(setLoading(true));
    return axios.get('https://e-commerce-api.academlo.tech/api/v1/purchases', getConfig())
        .then((res) => dispatch(getPurchases(res.data.data.purchases)))
        .finally(() => dispatch(setLoading(false)));
}

export const { getPurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;
