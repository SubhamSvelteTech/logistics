// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { assignedUserReducer } from "../Reducers/assignedUserReducer";

const initialState: any = {
  assignedUser: {},
};

const assignedUserSlice = createSlice({
  name: "assignedUser",
  initialState,
  reducers: assignedUserReducer,
});

export const { assignedUser, resetAssignedUser } = assignedUserSlice.actions;
export default assignedUserSlice.reducer;
