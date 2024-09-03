import axiosInstance from "@/services/utils/hooks/useApi";
import {
  FETCH_ADDRESS,
  FETCH_ASSIGNED_TO,
  LOGISTIC_DASHBOARD_CHART,
  WORK_ORDER_ALL_PATIENT,
} from "../constants/apiEndpoints";

export const fetchAssignedTo = async (id: any, addressId: any) => {
  const res = await axiosInstance.get(
    `${FETCH_ASSIGNED_TO}?patientId=${id}&addressId=${addressId}`
  );
  return res?.data?.data;
};

export const getPatientList = async () => {
  const res = await axiosInstance.get(WORK_ORDER_ALL_PATIENT);
  if (res.status === 200) {
    return res.data.data.data;
  } else {
    throw new Error("Failed to fetch patients");
  }
};

export const getPatientAddress = async (id: string) => {
  const res = await axiosInstance.get(FETCH_ADDRESS + id);
  if (res.status === 200) {
    return res?.data?.data;
  } else {
    throw new Error("Failed to fetch patients");
  }
};

export const getChartData = async () => {
    const res = await axiosInstance.get(LOGISTIC_DASHBOARD_CHART);
    if (res.status === 200) {
      return res.data.data.data;
    } else {
      throw new Error('Failed to fetch patients');
    }
  };
