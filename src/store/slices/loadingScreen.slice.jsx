import { createSlice } from '@reduxjs/toolkit';

export const loadingScreenSlice = createSlice({
    name: 'loadingScreen',
    initialState: true,
    reducers: {
        setLoading: (state, action) => {
            return action.payload
        }
    }
})

export const { setLoading } = loadingScreenSlice.actions;

export default loadingScreenSlice.reducer;
