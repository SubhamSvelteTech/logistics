import { ModalPayload } from "@/Interfaces/Redux/ModalPayload";
import { PayloadAction } from "@reduxjs/toolkit";

export const modalReducer = {
  openModal: (state: any, action: PayloadAction<ModalPayload>) => {
      const { id } = action.payload;
      state.modals[id] = true;
  },
  closeModal: (state:any, action: PayloadAction<ModalPayload>) => {
    const { id } = action.payload;
    delete state.modals[id];
  },
  closeAllModals: (state:any) => {
    state.modals = {};
  },
};
