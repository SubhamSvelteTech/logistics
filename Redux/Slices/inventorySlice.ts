// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { inventoryReducer } from "../Reducers/inventoryReducer";

const initialState: any = {
  getInventory: false,
  data: [],
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: inventoryReducer,
});

export const { isInventory, setInventoryData, setAssignPartner } =
  inventorySlice.actions;
export default inventorySlice.reducer;
