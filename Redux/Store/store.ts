// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../Slices/modalSlice";
import selectedWorkOrderSlice from "../Slices/selectedWorkOrderSlice";
import assignToSlice from "../Slices/assignToSlice";
import fetchAssignedToSlice from "../Slices/fetchAssignedToSlice";
import assignedUserSlice from "../Slices/assignedUserSlice";
import patientAddressesSlice from "../Slices/patientAddressesSlice";
import prescriptionSlice from "../Slices/prescriptionSlice";
import inventorySlice from "../Slices/inventorySlice";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    selectedWorkOrder: selectedWorkOrderSlice,
    assignTo: assignToSlice,
    fetchAssignedToData: fetchAssignedToSlice,
    assignedUser: assignedUserSlice,
    patientAddress: patientAddressesSlice,
    prescription: prescriptionSlice,
    inventory: inventorySlice,
  },
});

export default store;
