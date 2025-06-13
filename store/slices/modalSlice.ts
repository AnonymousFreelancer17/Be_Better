// src/features/auth/fitnessSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalState = {
  isLoading: boolean;
  getInfoModal: 
};

const initialState: ModalState = {
  isLoading: false,
  generateFitnessRegime: false,
  regimeType: 'home',
  regimeDuration: 30,
  fitnessLevel: 'beginner',
  goals: [],
  generatedPlan: null,
  lastUpdated: null,
  error: null,
};

const fitnessSlice = createSlice({
  name: "fitness",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    toggleFitnessRegime(state) {
      state.generateFitnessRegime = !state.generateFitnessRegime;
    },
    setFitnessRegime(state, action: PayloadAction<boolean>) {
      state.generateFitnessRegime = action.payload;
    },
    setRegimeType(state, action: PayloadAction<FitnessState["regimeType"]>) {
      state.regimeType = action.payload;
    },
    setRegimeDuration(state, action: PayloadAction<number>) {
      state.regimeDuration = action.payload;
    },
    setFitnessLevel(state, action: PayloadAction<FitnessState["fitnessLevel"]>) {
      state.fitnessLevel = action.payload;
    },
    setGoals(state, action: PayloadAction<string[]>) {
      state.goals = action.payload;
    },
    setGeneratedPlan(state, action: PayloadAction<any>) {
      state.generatedPlan = action.payload;
      state.lastUpdated = new Date().toISOString();
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    resetFitnessState() {
      return initialState;
    },
  },
});

export const {
  setLoading,
  toggleFitnessRegime,
  setFitnessRegime,
  setRegimeType,
  setRegimeDuration,
  setFitnessLevel,
  setGoals,
  setGeneratedPlan,
  setError,
  resetFitnessState,
} = fitnessSlice.actions;

export default fitnessSlice.reducer;
