import { PayloadAction } from "@reduxjs/toolkit";

export const patientAddressReducer = {
  addPatientAddress: (state: any, action: PayloadAction<any>) => {
    const { payload } = action;
    return {
      ...state,
      patientAddress: [
        ...payload,
      ],
    };
  },
  resetPatientAddress: () => {
    return {
        patientAddress: [],
    };
  },
};
