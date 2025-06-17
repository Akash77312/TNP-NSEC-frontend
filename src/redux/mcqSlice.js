// mcqSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mcqs: [], // Store MCQs
  topic: "", // Store the selected topic
};

const mcqSlice = createSlice({
  name: "mcqs",
  initialState,
  reducers: {
    setMCQs(state, action) {
      state.mcqs = action.payload; // Set the MCQs data
    },
    setTopic(state, action) {
      state.topic = action.payload; // Set the topic
    },
  },
});

export const { setMCQs, setTopic } = mcqSlice.actions;
export default mcqSlice.reducer;
