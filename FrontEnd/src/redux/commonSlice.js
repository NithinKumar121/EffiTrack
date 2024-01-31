import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    mode:false,
    mobileScreenNav:false,
}

const commonSlice = createSlice({
    name: "commonSlice",
    initialState,
    reducers:{
        toggleMode:((state,action)=>{
            return{
                ...state,
                mode:action.payload,
            }
        }),
        toggleLeftMobileNav:((state,action)=>{
            return{
                ...state,
                mobileScreenNav:action.payload,
            }
        })
    }
})  

export const {toggleMode,toggleLeftMobileNav} = commonSlice.actions;

export default commonSlice.reducer;