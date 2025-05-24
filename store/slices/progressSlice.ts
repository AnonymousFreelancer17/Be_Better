// src/features/progress/progressSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProgressEntry {
  date: string; // YYYY-MM-DD
  weight?: number;
  steps?: number;
  distanceKm?: number;
  workoutsCompleted?: number;
  notes?: string;
}

interface ProgressState {
  entries: ProgressEntry[];
  isLoading: boolean;
  error: string | null;
  lastUpdated: string | null;
}

const initialState: ProgressState = {
  entries: [],
  isLoading: false,
  error: null,
  lastUpdated: null,
};

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },

    // Add or Update Entry
    addOrUpdateEntry(state, action: PayloadAction<ProgressEntry>) {
      const index = state.entries.findIndex(e => e.date === action.payload.date);
      if (index >= 0) {
        state.entries[index] = action.payload; // Update existing
      } else {
        state.entries.push(action.payload); // Add new
      }
      state.lastUpdated = new Date().toISOString();
    },

    // Delete Entry
    deleteEntry(state, action: PayloadAction<string>) {
      state.entries = state.entries.filter(entry => entry.date !== action.payload);
      state.lastUpdated = new Date().toISOString();
    },

    // Reset All Progress
    resetProgressState() {
      return initialState;
    }
  },
});

export const {
  setLoading,
  setError,
  addOrUpdateEntry,
  deleteEntry,
  resetProgressState
} = progressSlice.actions;

export default progressSlice.reducer;
