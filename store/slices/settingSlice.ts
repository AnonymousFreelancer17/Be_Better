// src/features/settings/settingSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingState {
  lightTheme: boolean;
  notificationVisibility: boolean;
  language: string;
  soundEnabled: boolean;
  autoSync: boolean;
  timezone: string;
  remindersEnabled: boolean;
  units: 'metric' | 'imperial';
}

const initialState: SettingState = {
  lightTheme: false,
  notificationVisibility: false,
  language: 'en',
  soundEnabled: true,
  autoSync: true,
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  remindersEnabled: true,
  units: 'metric',
};

const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.lightTheme = !state.lightTheme;
    },
    toggleNotificationModalVisibility: (state) => {
      state.notificationVisibility = !state.notificationVisibility;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    toggleSound: (state) => {
      state.soundEnabled = !state.soundEnabled;
    },
    toggleAutoSync: (state) => {
      state.autoSync = !state.autoSync;
    },
    setTimezone: (state, action: PayloadAction<string>) => {
      state.timezone = action.payload;
    },
    toggleReminders: (state) => {
      state.remindersEnabled = !state.remindersEnabled;
    },
    setUnits: (state, action: PayloadAction<'metric' | 'imperial'>) => {
      state.units = action.payload;
    },
    resetSettings: () => initialState,
  },
});

export const {
  toggleTheme,
  toggleNotificationModalVisibility,
  setLanguage,
  toggleSound,
  toggleAutoSync,
  setTimezone,
  toggleReminders,
  setUnits,
  resetSettings,
} = settingSlice.actions;

export default settingSlice.reducer;
