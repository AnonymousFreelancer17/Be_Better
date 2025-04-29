import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lightTheme: false,
};

interface SettingState {
  lightTheme: boolean;
}

const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    themeToggler: (state) => {
      state.lightTheme = !state.lightTheme;
    },
    
  },
});

export const { themeToggler } = settingSlice.actions;
export default settingSlice.reducer;
