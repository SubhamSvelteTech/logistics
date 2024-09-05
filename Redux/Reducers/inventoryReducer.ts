import { PayloadAction } from "@reduxjs/toolkit";

export const inventoryReducer = {
  isInventory: (state: any, action: PayloadAction<any>) => {
    const { payload } = action;
    return {
      ...state,
      getInventory: payload,
    };
  },
};
