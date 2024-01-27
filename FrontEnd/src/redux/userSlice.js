import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetials: {
    username: "unknown",
    email: "unknown",
    leetcode: "unknown",
    codeforces: "unknown",
    codechef: "unknown",
    github: "unknown",
    socialMedia:{
      linkedIn: undefined,
      twitter: undefined,
      reddit: undefined
    }
  },
  upcomingContest: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    changeUserDetails: (state, action) => {
      return {
        ...state,
        userDetials: action.payload,
      };
    },
    changeUpcomingContest: (state, action) => {
      return {
        ...state,
        upcomingContest: action.payload,
      };
    },
  },
});

export const { changeUserDetails, changeUpcomingContest } = userSlice.actions;

export default userSlice.reducer;
