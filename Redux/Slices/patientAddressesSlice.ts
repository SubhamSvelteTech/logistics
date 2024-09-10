// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { patientAddressReducer } from "../Reducers/patientAddressesReducer";

const initialState:any = {
    patientAddress: [],
};

const patientAddressesSlice = createSlice({
  name: "patientAddress",
  initialState,
  reducers: patientAddressReducer,
});

export const { addPatientAddress,resetPatientAddress } = patientAddressesSlice.actions;
export default patientAddressesSlice.reducer;
