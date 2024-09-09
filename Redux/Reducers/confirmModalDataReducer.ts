import { current, PayloadAction } from "@reduxjs/toolkit";

export const confirmModalDataReducer = {
  addConfirmedData: (state: any, action: PayloadAction<any>) => {
    const { payload } = action;
    const { workOrder, assignTo, assignedUser } = payload;

    return {
      ...state,
      confirmModalData: {
        fullName: workOrder?.fullName,
        city: workOrder?.city,
        country: workOrder?.country,
        date: assignTo?.assignedDate,
        time: assignTo?.startTime,
        mobile: workOrder?.mobileNumber,
        patientImage: workOrder?.profilePicture,
        patientEmail: workOrder?.email,
        workerName: assignedUser?.fullName,
        workerCity: assignedUser?.city,
        workerCountry: assignedUser?.country,
        workerState: assignedUser?.state,
        workerMobile: assignedUser?.mobile,
        workerImage: assignedUser?.profilePicture,
      },
    };
  },

  setConfirmModalData: (state: any, action: PayloadAction<any>) => {
    const { payload } = action;

    return {
      ...state,
      confirmModalData: {
        ...payload,
      },
    };
  },

  resetConfirmedData: () => {
    return {
      confirmModalData: {},
    };
  },
};
