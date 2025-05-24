// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";


// importing slices here -----------------------------------------------------------------

import settingReducer from "./slices/settingSlice";
import authReducer from "./slices/AuthSlice";
import fitnessReducer from "./slices/fitnessSlice";
import userReducer from "./slices/userSlice";
import scheduleReducer from "./slices/scheduleSlice";
import nutritionReducer from "./slices/nutritionSlice";
import progressReducer from "./slices/progressSlice";



const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"], // Persist only auth
};

const rootReducer = combineReducers({
  auth: authReducer,
  setting : settingReducer,
  fitness : fitnessReducer,
  user : userReducer,
  schedule : scheduleReducer,
  nutrition: nutritionReducer,
  progress: progressReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
