import { ModalPayload } from "@/Interfaces/Redux/ModalPayload";
import { PayloadAction } from "@reduxjs/toolkit";

export const selectedWorkOrderReducer = {
  addWorkOrderTask: (state: any, action: PayloadAction<any>) => {
      const {payload} = action
      return {
        ...state,
        workOrder: payload
      }
  },
  resetWorkOrder:() => {
    return{
      workOrder:{}
    }
  }
};
