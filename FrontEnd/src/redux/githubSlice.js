import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  GithubProfile: {
    avatar_url: "https://i.ibb.co/0YBRzmJ/temp-logo.jpg",
    name: "unknown",
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
  },
  userGithubRepo: [],
};

const githubSlice = createSlice({
  name: "githubSlice",
  initialState,
  reducers: {
    updateGithubProfile: (state, action) => {
      return {
        userGithubRepo: state.userGithubRepo,
        ...state,
        GithubProfile: action.payload,
      };
    },
    updateGithubRepo: (state, action) => {
      return {
        GithubProfile: state.GithubProfile,
        ...state,
        userGithubRepo: action.payload,
      };
    },
  },
});

export const { updateGithubRepo, updateGithubProfile } = githubSlice.actions;

export default githubSlice.reducer;
