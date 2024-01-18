import { configureStore, isPending } from '@reduxjs/toolkit'
// import LeetCodereducer from './LeetcodeSlice';

import userSlice from './userSlice';

export const store = configureStore({
  reducer: {
      userDetails:userSlice,
  },
})


export default store;