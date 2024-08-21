// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { modalReducer } from "../Reducers/modalReducer";

interface ModalState {
    modals: Record<string, boolean>;
  }

const initialState:ModalState = {
    modals: {},
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: modalReducer,
});

export const { openModal, closeModal, closeAllModals } = modalSlice.actions;
export default modalSlice.reducer;
