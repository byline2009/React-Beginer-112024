import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./createSlice";
import updateCounterReducer from "./updateSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    updateCounter: updateCounterReducer,
  },
});
