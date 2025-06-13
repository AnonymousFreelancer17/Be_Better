import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  height: number; // in cm
  weight: number; // in kg
  bodyFat: number;
  goal: 'weight_loss' | 'muscle_gain' | 'maintain';
  activityLevel: 'sedentary' | 'lightly_active' | 'active' | 'very_active';
  dietaryPreference: string;
  allergies: string[];
  BMR: number;
  hydration: number;
  climate: string;
}

interface DefaultBoards {
  id: string;
  title: "fitness" | "nutrition" | "schedule";
  tasksPending: Array<any>;
  eventsPending: Array<any>;


}

const initialState: UserProfile = {
  id: '',
  name: '',
  email: '',
  age: 0,
  gender: 'other',
  height: 0,
  weight: 0,
  bodyFat: 0,
  goal: 'maintain',
  activityLevel: 'sedentary',
  dietaryPreference: 'balanced',
  allergies: [],
  BMR: 0,
  hydration: 0,
  climate: '',
};

const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    // Full login/profile set
    setUserProfile: (state, action: PayloadAction<UserProfile>) => {
      return { ...action.payload };
    },

    // Partial profile update
    updateUserProfile: (state, action: PayloadAction<Partial<UserProfile>>) => {
      Object.assign(state, action.payload);
    },

    // Update BMR
    setBMR: (state, action: PayloadAction<number>) => {
      state.BMR = action.payload;
    },

    // Update hydration
    setHydration: (state, action: PayloadAction<number>) => {
      state.hydration = action.payload;
    },

    // Reset user to initial state
    resetUserProfile: () => initialState,
  },
});

export const {
  setUserProfile,
  updateUserProfile,
  setBMR,
  setHydration,
  resetUserProfile,
} = userSlice.actions;

export default userSlice.reducer;
