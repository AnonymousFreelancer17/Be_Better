// src/features/schedule/scheduleSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Reminder {
  id: string;
  type: 'meal' | 'workout' | 'hydration' | 'custom';
  message: string;
  time: string; // HH:mm
  repeat: 'daily' | 'weekly' | 'once';
}

interface ScheduledEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  type: 'meal' | 'workout' | 'custom';
  description?: string;
  time: string;
}

interface ScheduleState {
  reminders: Reminder[];
  events: ScheduledEvent[];
  isLoading: boolean;
  error: string | null;
  lastUpdated: string | null;
}

const initialState: ScheduleState = {
  reminders: [],
  events: [],
  isLoading: false,
  error: null,
  lastUpdated: null,
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },

    // Reminders
    addReminder(state, action: PayloadAction<Reminder>) {
      state.reminders.push(action.payload);
      state.lastUpdated = new Date().toISOString();
    },
    updateReminder(state, action: PayloadAction<Reminder>) {
      const index = state.reminders.findIndex(r => r.id === action.payload.id);
      if (index !== -1) {
        state.reminders[index] = action.payload;
        state.lastUpdated = new Date().toISOString();
      }
    },
    deleteReminder(state, action: PayloadAction<string>) {
      state.reminders = state.reminders.filter(r => r.id !== action.payload);
      state.lastUpdated = new Date().toISOString();
    },
    clearReminders(state) {
      state.reminders = [];
      state.lastUpdated = new Date().toISOString();
    },

    // Events
    addEvent(state, action: PayloadAction<ScheduledEvent>) {
      state.events.push(action.payload);
      state.lastUpdated = new Date().toISOString();
    },
    updateEvent(state, action: PayloadAction<ScheduledEvent>) {
      const index = state.events.findIndex(e => e.id === action.payload.id);
      if (index !== -1) {
        state.events[index] = action.payload;
        state.lastUpdated = new Date().toISOString();
      }
    },
    deleteEvent(state, action: PayloadAction<string>) {
      state.events = state.events.filter(e => e.id !== action.payload);
      state.lastUpdated = new Date().toISOString();
    },
    clearEvents(state) {
      state.events = [];
      state.lastUpdated = new Date().toISOString();
    },

    // Reset Entire Schedule
    resetScheduleState() {
      return initialState;
    },
  },
});

export const {
  setLoading,
  setError,
  addReminder,
  updateReminder,
  deleteReminder,
  clearReminders,
  addEvent,
  updateEvent,
  deleteEvent,
  clearEvents,
  resetScheduleState,
} = scheduleSlice.actions;

export default scheduleSlice.reducer;
