import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    ccUserDetails:{
        "profile": "",
        "name": "unknown",
        "currentRating": 0,
        "highestRating": 0,
        "countryFlag": "",
        "countryName": "unknown",
        "globalRank": 0,
        "countryRank": 0,
        "stars": "0★"
    }
}

const codechefSlice = createSlice({
    name: 'codechefSlice',
    initialState,
    reducers: {
      ccUpdateUserDetails: (state, action) => {
        return {
            ...state,
            ccUserDetails:action.payload
        }
      },
    },
  });
  

export const {ccUpdateUserDetails} = codechefSlice.actions;


export default codechefSlice.reducer;