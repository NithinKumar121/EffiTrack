import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    leetcode:true,
    codechef:true,
    codeforces:true,
    atcoder:true,
    geeksforgeeks:true
}

const persistSlice = createSlice({
    name:'rootSlice',
    initialState,
    reducers:{
        toggleUpcoming:(state,action)=>{
            const {key} = action.payload;
            state[key] = !state[key];
        }
    }
    
})

export const {toggleUpcoming} = persistSlice.actions;

export default persistSlice.reducer;
