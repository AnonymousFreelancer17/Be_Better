import { createSlice ,PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  modalType: "",
  modalHeading: "",
};

interface ModalState {
    modalType: 'success' | 'error' | 'loading' | '' | string;
  modalHeading:string;

}

const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    showModal: (
        state,
        action: PayloadAction<{ modalType: ModalState['modalType']; modalHeading: string }>
      ) => {
        state.modalType = action.payload.modalType;
        state.modalHeading = action.payload.modalHeading;
      },
      hideModal: (state) => {
        state.modalType = '';
        state.modalHeading = '';
      },

  },
});

export const { showModal , hideModal } = modalSlice.actions;
export default modalSlice.reducer;
