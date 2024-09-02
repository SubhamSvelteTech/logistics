// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchAssignedToReducer } from "../Reducers/fetchassignedToData";

const initialState:any = {
    fetchAssignedToData: [],
};

const fetchAssignToSlice = createSlice({
  name: "fetchassignto",
  initialState,
  reducers: fetchAssignedToReducer,
});

export const { addFetchAssignTo,resetFetchAssignTo } = fetchAssignToSlice.actions;
export default fetchAssignToSlice.reducer;
