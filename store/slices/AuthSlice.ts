// src/features/auth/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isAuthenticated: boolean;
  user: null | { id: string; name: string; email: string ; profilePic: String };
  token: string | null;
};

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: any; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
    setAuthChecked(state, action) {
      state.token = action.payload;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
