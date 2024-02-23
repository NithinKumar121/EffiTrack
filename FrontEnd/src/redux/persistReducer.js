import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    leetcode:false,
    codechef:false,
    codeforces:false,
    atcoder:false,
    geeksforgeeks:false
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
