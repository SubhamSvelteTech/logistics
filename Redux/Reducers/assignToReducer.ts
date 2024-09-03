import { PayloadAction } from "@reduxjs/toolkit";

export const assignToReducer = {
  addAssignTo: (state: any, action: PayloadAction<any>) => {
    const { payload } = action;
    return {
      ...state,
      assignTo: {
        ...state?.assignTo,
        ...payload,
      },
    };
  },
  resetAssignTo: () => {
    return {
      assignTo: {},
    };
  },
};
