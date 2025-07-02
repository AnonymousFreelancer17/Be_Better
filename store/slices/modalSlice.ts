// src/features/auth/modalSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalState = {
  isLoading: boolean;
  getInfoModal: boolean;
  createTasksOnTimlineModal: boolean,
  notificationVisibility: boolean;
  sidebarVisibility: boolean;
};

const initialState: ModalState = {
  isLoading: false,
  getInfoModal: false,
  createTasksOnTimlineModal: false,
  notificationVisibility: false,
  sidebarVisibility: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    toggleCreateTasksModal(state,action:PayloadAction<boolean>){
      state.createTasksOnTimlineModal =  !state.createTasksOnTimlineModal;
    },
     toggleNotificationModalVisibility: (state) => {
      state.notificationVisibility = !state.notificationVisibility;
    },
    toggleSidebarVisibility: (state) =>{
      state.sidebarVisibility = !state.sidebarVisibility;
    }
  }
});

export const {
  setLoading,
  toggleNotificationModalVisibility,
  toggleCreateTasksModal,
  toggleSidebarVisibility,
} = modalSlice.actions;

export default modalSlice.reducer;
