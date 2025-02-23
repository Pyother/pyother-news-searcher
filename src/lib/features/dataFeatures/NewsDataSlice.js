import { createSlice } from '@reduxjs/toolkit';

const NewsDataSlice = createSlice({
    name: 'newsData',
    initialState: {
        data: []
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        }
    }
});

export const { setData } = NewsDataSlice.actions;
export default NewsDataSlice.reducer;