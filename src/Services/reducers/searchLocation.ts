import { createSlice } from "@reduxjs/toolkit";

const locationService = createSlice({
  name: "Location",
  initialState: {
    location: "New York",
  },
  reducers: {
    setLocation: function (state, { payload }) {
      state.location = payload;
    },
    removeLocation: function (state, { payload }) {
      state.location = "";
    },
  },
});

export const { setLocation, removeLocation } = locationService.actions;

export default locationService.reducer;
