import { configureStore, isPending } from '@reduxjs/toolkit'
// import LeetCodereducer from './LeetcodeSlice';
import LcReducer from './LcSlice';
import CfReducer from './codeforcesSlice';

export const store = configureStore({
  reducer: {
    Leetcode:LcReducer,
    CodeForce:CfReducer,
  },
})


export default store;