import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/services/utils/hooks/useApi";
import { Patient } from "@/Interfaces/Utils/WorkOrder";
import { SLOTS_BY_DATE, WORK_ORDER_ALL_PATIENT } from "@/app/constants/apiEndpoints";

const getSlotsByDate = async (date:string) => {
  const res = await axiosInstance.post(SLOTS_BY_DATE,{date});
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error('Failed to fetch patients');
  }
};

export const useFetchSlots = (date:string) => {
    return useQuery<any, Error>({
      queryKey: ["slots",date],
      queryFn: () => getSlotsByDate(date),
      staleTime: 60 * 60 * 1000, // 24 hours
      refetchOnWindowFocus: false,
    });
  };
