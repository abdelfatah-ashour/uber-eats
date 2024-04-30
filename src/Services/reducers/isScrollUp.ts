import { createSlice } from "@reduxjs/toolkit";

const scrollUpService = createSlice({
  name: "Is Scroll Up",
  initialState: {
    current: false,
  },
  reducers: {
    setIsScrollUp: function name(state, { payload }) {
      state.current = payload;
    },
  },
});

export const { setIsScrollUp } = scrollUpService.actions;

export default scrollUpService.reducer;
