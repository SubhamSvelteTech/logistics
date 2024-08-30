// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import modalSlice from '../Slices/modalSlice';
import selectedWorkOrderSlice from '../Slices/selectedWorkOrderSlice';
import assignToSlice from '../Slices/assignToSlice';
import fetchAssignedToSlice from '../Slices/fetchAssignedToSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice,
    selectedWorkOrder: selectedWorkOrderSlice,
    assignTo:assignToSlice,
    fetchAssignedToData: fetchAssignedToSlice
  },
});

export default store;
