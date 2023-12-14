import { configureStore, isPending } from '@reduxjs/toolkit'
// import LeetCodereducer from './LeetcodeSlice';
import LcReducer from './LcSlice';
export const store = configureStore({
  reducer: {
    Leetcode:LcReducer
  },
})


export default store;