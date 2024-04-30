import { IUser } from "@/@types/User";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isAuth: boolean;
  user: IUser | null;
};

type SetIsLogPayload = {
  payload: InitialState;
};

const initState: InitialState = {
  isAuth: false,
  user: null,
};

const authService = createSlice({
  name: "Auth",
  initialState: initState,
  reducers: {
    setIsLog: function (state, { payload }: SetIsLogPayload) {
      state.isAuth = payload.isAuth;
      state.user = payload.user;
    },
    setIsLogout: function (state) {
      state.isAuth = false;
      state.user = null;
    },
  },
});

export const { setIsLog, setIsLogout } = authService.actions;

export default authService.reducer;
