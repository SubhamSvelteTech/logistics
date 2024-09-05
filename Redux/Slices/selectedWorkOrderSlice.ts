// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { selectedWorkOrderReducer } from "../Reducers/selectedWorkOrderReducer";

const initialState:any = {
    workOrder: {},
};

const selectedWorkOrderSlice = createSlice({
  name: "workOrder",
  initialState,
  reducers: selectedWorkOrderReducer,
});

export const { addWorkOrderTask,resetWorkOrder } = selectedWorkOrderSlice.actions;
export default selectedWorkOrderSlice.reducer;
