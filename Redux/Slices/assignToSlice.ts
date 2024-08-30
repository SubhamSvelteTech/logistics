// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { assignToReducer } from "../Reducers/assignToReducer";

const initialState:any = {
    assignTo: {orderStatus:"open"},
};

const assignToSlice = createSlice({
  name: "assignto",
  initialState,
  reducers: assignToReducer,
});

export const { addAssignTo,resetAssignTo } = assignToSlice.actions;
export default assignToSlice.reducer;
