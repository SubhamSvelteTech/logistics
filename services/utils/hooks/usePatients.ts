import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/services/utils/hooks/useApi";
import { Patient } from "@/Interfaces/Utils/WorkOrder";
import { WORK_ORDER_ALL_PATIENT } from "@/app/constants/apiEndpoints";

const getPatientList = async () => {
  const res = await axiosInstance.get(WORK_ORDER_ALL_PATIENT);
  if (res.status === 200) {
    return res.data.data.data;
  } else {
    throw new Error('Failed to fetch patients');
  }
};

export const usePatients = () => {
    return useQuery<Patient[], Error>({
      queryKey: ["patients"],
      queryFn: getPatientList,
      staleTime: 24 * 60 * 60 * 1000, // 24 hours
      refetchOnWindowFocus: false,
    });
  };
