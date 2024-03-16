// types.ts

import { combineReducers } from "redux";
import moviesReducer from "./moviesSlice"; // Import your moviesReducer

// Define RootState type
export type RootState = ReturnType<typeof rootReducer>;

// Combine reducers
export const rootReducer = combineReducers({
  movies: moviesReducer,
  // Add other reducers as needed
});
