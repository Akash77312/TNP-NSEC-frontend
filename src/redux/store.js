// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import mcqReducer from "./mcqSlice"; // Import the mcqReducer

const store = configureStore({
  reducer: {
    auth: authReducer,
    mcqs: mcqReducer, // Add the mcqs reducer
  },
});

export default store;
