import { configureStore, isPending } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userSlice from "./userSlice";
import LeetcodeSlice from "./LeetcodeSlice";
import codeforcesSlice from "./codeforcesSlice";
import codechefSlice from "./codechefSlice";
import githubSlice from "./githubSlice";
import commonSlice from "./commonSlice";

import rootReducer from './persistReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    userDetails: userSlice,
    leetcodeDetails: LeetcodeSlice,
    codeforcesDetails: codeforcesSlice,
    codechefDetails: codechefSlice,
    githubDetails: githubSlice,
    commonDetails:commonSlice,
    persistedReducer:persistedReducer,
  },
});

export default store;


export const persistor = persistStore(store);