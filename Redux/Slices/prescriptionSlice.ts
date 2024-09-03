// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { prescriptionReducer } from "../Reducers/prescriptionReducer";

const initialState:any = {
    prescription: [],
};

const prescriptionSlice = createSlice({
  name: "prescription",
  initialState,
  reducers: prescriptionReducer,
});

export const { addPrescription,resetPrescription } = prescriptionSlice.actions;
export default prescriptionSlice.reducer;
