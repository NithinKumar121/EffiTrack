import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    // GithubProfile:
    userGithubRepo:[],
}

const githubSlice = createSlice({
    name: 'githubSlice',
    initialState,
    reducers: {
      updateGithubRepo: (state, action) => {
        return {
          ...state,
          userGithubRepo: action.payload,
      }
      },
    },
  });

export const {updateGithubRepo} = githubSlice.actions;


export default githubSlice.reducer;