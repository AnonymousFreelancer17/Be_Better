// src/features/nutrition/nutritionSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Ingredient {
  name: string;
  quantity: string;
}

interface Meal {
  id: string;
  name: string;
  ingredients: Ingredient[];
  recipe: string;
  imageUrl: string;
  calories: number;
  macros: { carbs: number; protein: number; fat: number };
  prepTime: number; // minutes
}

interface DayMealPlan {
  breakfast: Meal[];
  lunch: Meal[];
  dinner: Meal[];
  snacks: Meal[];
}

interface FoodLogEntry {
  date: string;
  entries: Meal[];
}

interface DailyGoals {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

interface NutritionState {
  mealPlans: Record<string, DayMealPlan>; // keyed by YYYY-MM-DD
  foodLog: FoodLogEntry[];
  dailyGoals: DailyGoals;
  isLoading: boolean;
  error: string | null;
  lastUpdated: string | null;
}

const initialState: NutritionState = {
  mealPlans: {},
  foodLog: [],
  dailyGoals: {
    calories: 2000,
    protein: 150,
    carbs: 200,
    fat: 70,
  },
  isLoading: false,
  error: null,
  lastUpdated: null,
};

const nutritionSlice = createSlice({
  name: "nutrition",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },

    // Meal Plan
    setMealPlanForDate(state, action: PayloadAction<{ date: string; mealPlan: DayMealPlan }>) {
      state.mealPlans[action.payload.date] = action.payload.mealPlan;
      state.lastUpdated = new Date().toISOString();
    },
    clearMealPlanForDate(state, action: PayloadAction<string>) {
      delete state.mealPlans[action.payload];
      state.lastUpdated = new Date().toISOString();
    },

    // Food Log
    addFoodLogEntry(state, action: PayloadAction<FoodLogEntry>) {
      const index = state.foodLog.findIndex(f => f.date === action.payload.date);
      if (index >= 0) {
        state.foodLog[index].entries.push(...action.payload.entries);
      } else {
        state.foodLog.push(action.payload);
      }
      state.lastUpdated = new Date().toISOString();
    },
    removeFoodLogEntry(state, action: PayloadAction<{ date: string; mealId: string }>) {
      const dayEntry = state.foodLog.find(f => f.date === action.payload.date);
      if (dayEntry) {
        dayEntry.entries = dayEntry.entries.filter(meal => meal.id !== action.payload.mealId);
        state.lastUpdated = new Date().toISOString();
      }
    },
    clearFoodLogForDate(state, action: PayloadAction<string>) {
      state.foodLog = state.foodLog.filter(entry => entry.date !== action.payload);
      state.lastUpdated = new Date().toISOString();
    },

    // Daily Goals
    setDailyGoals(state, action: PayloadAction<DailyGoals>) {
      state.dailyGoals = action.payload;
      state.lastUpdated = new Date().toISOString();
    },

    // Full Reset
    resetNutritionState() {
      return initialState;
    }
  },
});

export const {
  setLoading,
  setError,
  setMealPlanForDate,
  clearMealPlanForDate,
  addFoodLogEntry,
  removeFoodLogEntry,
  clearFoodLogForDate,
  setDailyGoals,
  resetNutritionState
} = nutritionSlice.actions;

export default nutritionSlice.reducer;
