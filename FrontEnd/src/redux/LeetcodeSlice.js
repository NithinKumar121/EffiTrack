import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    count:[
                {
                    "difficulty": "All",
                    "count": 0,
                    "submissions": 0
                },
                {
                    "difficulty": "Easy",
                    "count": 0,
                    "submissions": 0
                },
                {
                    "difficulty": "Medium",
                    "count": 0,
                    "submissions": 0
                },
                {
                    "difficulty": "Hard",
                    "count": 0,
                    "submissions": 0
                }
            ],
    rating:[],
}

const leetcodeSlice = createSlice({
    name: 'leetcodeSlice',
    initialState,
    reducers: {
      modifyCount: (state, action) => {
        return {
            ...state,
            count: action.payload,
        }
      },
      modifyRating: (state, action) => {
        if (action.payload.length > 0) {
            if(state.rating.length == 0){
                state.rating.push(action.payload);
            }
        }
      },
    },
  });
  


export const {modifyCount,modifyRating} = leetcodeSlice.actions;

export default leetcodeSlice.reducer;