// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { confirmModalDataReducer } from "../Reducers/confirmModalDataReducer";

const initialState:any = {
    confirmModalData: {},
};

const confirmModalDataSlice = createSlice({
  name: "confirmModalData",
  initialState,
  reducers: confirmModalDataReducer,
});

export const { addConfirmedData,resetConfirmedData } = confirmModalDataSlice.actions;
export default confirmModalDataSlice.reducer;
