import { createSlice } from '@reduxjs/toolkit';

const codeFroceSlice = createSlice({
    name:"codeFroceSlice",
    initialState:{
        CFcount:[],
        CFrating:[],
    },
    reducers:{
        addCodeForceCount:(state,action)=>{
            if(state.CFcount.length==0){
                state.CFcount.push(action.payload);
            }
        },
        addCodeForceRating:(state,action)=>{
            if(state.CFrating.length==0){
                state.CFrating.push(action.payload);
            }
        },
    }
})

export const {addCodeForceCount,addCodeForceRating} = codeFroceSlice.actions;

export default codeFroceSlice.reducer;

