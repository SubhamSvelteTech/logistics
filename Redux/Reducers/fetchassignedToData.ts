import { PayloadAction } from "@reduxjs/toolkit";

export const fetchAssignedToReducer = {
  addFetchAssignTo: (state: any, action: PayloadAction<any>) => {
    const { payload } = action;
    return {
      ...state,
      fetchAssignedToData: [
        ...payload,
      ],
    };
  },
  resetFetchAssignTo: () => {
    return {
        fetchAssignedToData: [],
    };
  },
};
