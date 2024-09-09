// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { selectedWorkOrderReducer } from "../Reducers/selectedWorkOrderReducer";
import { inventoryReducer } from "../Reducers/inventoryReducer";

const initialState: any = {
  getInventory: false,
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: inventoryReducer,
});

export const { isInventory } = inventorySlice.actions;
export default inventorySlice.reducer;
