import { PayloadAction } from "@reduxjs/toolkit";

export const prescriptionReducer = {
  addPrescription: (state: any, action: PayloadAction<any>) => {
    const { payload } = action;
    return {
      ...state,
      prescription: [
        ...payload,
      ],
    };
  },
  resetPrescription: () => {
    return {
        prescription: [],
    };
  },
};
