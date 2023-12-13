import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  LcData: [],
};

const LcSlice = createSlice({
  name: 'LcSlice',
  initialState,
  reducers: {
    addLcData: (state, action) => {
      state.LcData.push(action.payload);
    },
  },
});

export const { addLcData } = LcSlice.actions;

export default mySlice.reducer;
