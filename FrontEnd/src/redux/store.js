import { configureStore, isPending } from "@reduxjs/toolkit";
// import LeetCodereducer from './LeetcodeSlice';

import userSlice from "./userSlice";
import LeetcodeSlice from "./LeetcodeSlice";
import codeforcesSlice from "./codeforcesSlice";
import codechefSlice from "./codechefSlice";
import githubSlice from "./githubSlice";
import commonSlice from "./commonSlice";

export const store = configureStore({
  reducer: {
    userDetails: userSlice,
    leetcodeDetails: LeetcodeSlice,
    codeforcesDetails: codeforcesSlice,
    codechefDetails: codechefSlice,
    githubDetails: githubSlice,
    commonDetails:commonSlice,
  },
});

export default store;
