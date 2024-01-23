import { createSlice } from '@reduxjs/toolkit'



const initialState = {
        cfRating: []
}

const codeforcesSlice = createSlice({
    name:'codeforcesSlice',
    initialState,
    reducers:{
        cfModifyRating:(state,action)=>{
            if(action.payload.length > 0){
                if(state.cfRating.length == 0){
                    state.cfRating.push(action.payload);
                }
            }
           
        }
    }
})


export const {cfModifyRating} = codeforcesSlice.actions;

export default codeforcesSlice.reducer;