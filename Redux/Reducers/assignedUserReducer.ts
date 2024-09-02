import { PayloadAction } from "@reduxjs/toolkit";

export const assignedUserReducer = {
  assignedUser: (state: any, action: PayloadAction<any>) => {
    const { payload } = action;
    return {
      ...state,
      assignedUser: {
        ...payload,
      },
    };
  },
  resetAssignedUser: () => {
    return {
        assignedUser: {},
    };
  },
};
