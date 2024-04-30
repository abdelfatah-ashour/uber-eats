import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  tab: "DELIVERY" | "PICKUP";
};

const initialState: initialStateType = {
  tab: "DELIVERY",
};

const currentTabService = createSlice({
  name: "current_screen",
  initialState: initialState,
  reducers: {
    setCurrentTab: function (state, { payload }) {
      state.tab = payload;
    },
  },
});

export const { setCurrentTab } = currentTabService.actions;

export default currentTabService.reducer;
