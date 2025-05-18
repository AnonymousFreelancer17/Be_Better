// src/features/auth/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: string;
  name: string;
  email: string;
  profilePic: string;
};

type AuthState = {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
};

const initialState: AuthState = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },

    fetchUserInfo: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },

    setAuthChecked: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
  },
});

export const { login, logout, fetchUserInfo, setAuthChecked } = authSlice.actions;
export default authSlice.reducer;
