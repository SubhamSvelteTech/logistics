import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/services/utils/hooks/useApi";
import { Patient } from "@/Interfaces/Utils/WorkOrder";
import { FETCH_ADDRESS, FETCH_ASSIGNED_TO } from "@/app/constants/apiEndpoints";

const getAssignedTo = async (id:string,addressId:any) => {
  const res = await axiosInstance.get(`${FETCH_ASSIGNED_TO}?patientId=${id}&addressId=${addressId}`);
  if (res.status === 200) {
    return res?.data?.data; 
  } else {
    throw new Error('Failed to fetch patients');
  }
};

export const useFetchAssignedTo = (id:any,addressId:any) => {
    return useQuery<Patient[], Error>({
      queryKey: ["assignTo",id,addressId],
      queryFn: ()=>getAssignedTo(id,addressId),
      staleTime: 60 * 60 * 1000, // 24 hours
      refetchOnWindowFocus: false,
    });
  };
