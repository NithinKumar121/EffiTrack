import { createSlice } from "@reduxjs/toolkit";

const LcSlice = createSlice({
  name: "LcSlice",
  initialState: {
    LcData: [],
    LcContest: [],
  },
  reducers: {
    addLcData: (state, action) => {
      const newItem = action.payload;
      if (state.LcData.length == 0) {
        state.LcData.push(newItem);
      }
    },
    addLcContest: (state, action) => {
      const newItem = action.payload;
      if (state.LcContest.length == 0) {
        state.LcContest.push(newItem);
      }
    },
  },
});

export const { addLcData, addLcContest } = LcSlice.actions;

export default LcSlice.reducer;
