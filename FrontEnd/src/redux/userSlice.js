import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    userDetials:{
        username: "unknown",
        email: "unknown",
        leetcode: "unknown",
        codeforces: "unknown",
        codechef: "unknown",
        github: "unknown",
    },
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
      changeUserDetails:(state,action)=>{
        return {
          ...state,
          userDetials:action.payload
        } 
      }
    },
  });
  
  export const { changeUserDetails } = userSlice.actions;
  
  
  export default userSlice.reducer;