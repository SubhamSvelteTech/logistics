import axiosInstance from "@/services/utils/hooks/useApi";
import {
  FETCH_ADDRESS,
  FETCH_ASSIGNED_TO,
  LOGISTIC_DASHBOARD_CHART,
  TASK_LIST,
  WORK_ORDER_ALL_PATIENT,
} from "../constants/apiEndpoints";

export const fetchAssignedTo = async (id: any, addressId: any, taskId: any) => {
  const res = await axiosInstance.get(
    `${FETCH_ASSIGNED_TO}?patientId=${id}&addressId=${addressId}&taskId=${taskId}`
  );
  return res?.data?.data;
};

export const getPatientList = async (page: any) => {
  const res = await axiosInstance.get(
    `${WORK_ORDER_ALL_PATIENT}page=${page}&pageSize=10&assignTo=false`
  );
  if (res.status === 200) {
    // return res.data.data.data;
    return res.data;
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
    throw new Error("Failed to fetch patients");
  }
};

export const getTaskListData = async (page?:any,testType?:any,search?:any) => {
  const res = await axiosInstance.get(`${TASK_LIST}page=${page}&pageSize=10${testType?.length > 0 ? "&testType="+testType : ''}${search?.length > 0 ? "&search="+search : ''}`);
  if (res?.status === 200) {
    return res?.data;
  } else {
    throw new Error("Failed to fetch patients");
  }
};

export const downloadPDFFile = async (response: any) => {
    try {
      const url = response
      const a = document.createElement('a');
      a.href = url;
      a.download = 'file.pdf'; // Set default name if fileName is not provided
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
};
