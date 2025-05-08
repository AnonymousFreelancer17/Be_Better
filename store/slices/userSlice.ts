import { createSlice ,PayloadAction } from '@reduxjs/toolkit';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  height: number; // in cm
  weight: number; // in kg
  goal: 'weight_loss' | 'muscle_gain' | 'maintain';
  activityLevel: 'sedentary' | 'lightly_active' | 'active' | 'very_active';
  dietaryPreference: string;
  allergies: string[];
}

const initialState: UserProfile = {
  id: '',
  name: '',
  email: '',
  age: 0,
  gender: 'other',
  height: 0,
  weight: 0,
  goal: 'maintain',
  activityLevel: 'sedentary',
  dietaryPreference: 'balanced',
  allergies: [],
};

const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: any; token: string }>) => {
      state.gender = action.payload.gender;
      state.height = action.payload.height;
      state.weight = true;
      state.isLoading = false;
    },
  },
});

export const {  } = userSlice.actions;
export default userSlice.reducer;
