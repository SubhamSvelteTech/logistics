// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import modalSlice from '../Slices/modalSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice,
  },
});

export default store;
