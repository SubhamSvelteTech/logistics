import { current, PayloadAction } from "@reduxjs/toolkit";
import store from "../Store/store";

export const confirmModalDataReducer = {
  addConfirmedData: (state: any, action: PayloadAction<any>) => {
    const { payload } = action;
    const {workOrder, assignTo, assignedUser} = payload
    const prevState = current(state)
    
    console.log(prevState,'dsfdsfd',)
    return {
      ...state,
      confirmModalData: {
        fullName:workOrder?.fullName,
        city:workOrder?.city,
        country:workOrder?.country,
        date:assignTo?.assignedDate,
        time:assignTo?.startTime,
        mobile:workOrder?.mobileNumber,
        patientImage:workOrder?.profilePicture,
        patientEmail:workOrder?.email,
        workerName:assignedUser?.fullName,
        workerCity:assignedUser?.city,
        workerCountry:assignedUser?.country,
        workerState:assignedUser?.state,
        workerMobile:assignedUser?.mobile,
        workerImage:assignedUser?.profilePicture
      },
    };
  },
  resetConfirmedData: () => {
    return {
      confirmModalData: {},
    };
  },
};
