import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/services/utils/hooks/useApi";
import { Patient } from "@/Interfaces/Utils/WorkOrder";
import { FETCH_ADDRESS } from "@/app/constants/apiEndpoints";

const getPatientAddress = async (id:string) => {
  const res = await axiosInstance.get(FETCH_ADDRESS+id);
  if (res.status === 200) {
    return res?.data?.data;
  } else {
    throw new Error('Failed to fetch patients');
  }
};

export const useFetchAddress = (id:any) => {
    return useQuery<Patient[], Error>({
      queryKey: ["address",id],
      queryFn: ()=>getPatientAddress(id),
      staleTime: 60 * 60 * 1000, // 24 hours
      refetchOnWindowFocus: false,
    });
  };
