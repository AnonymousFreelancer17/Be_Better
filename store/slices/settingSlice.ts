import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lightTheme: false,
  notificationVibility : false,
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
    NotificationModalVisibilityTogler: (state) =>{
      state.notificationVibility = !state.notificationVibility;
    }
    
  },
});

export const { themeToggler,NotificationModalVisibilityTogler } = settingSlice.actions;
export default settingSlice.reducer;
