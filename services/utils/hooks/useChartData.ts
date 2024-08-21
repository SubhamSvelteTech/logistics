import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/services/utils/hooks/useApi";
import { Patient } from "@/Interfaces/Utils/WorkOrder";
import { LOGISTIC_DASHBOARD_CHART } from "@/app/constants/apiEndpoints";
import { ChartData } from "@/Interfaces/Utils/Dashboard";

const getChartData = async () => {
  const res = await axiosInstance.get(LOGISTIC_DASHBOARD_CHART);
  if (res.status === 200) {
    return res.data.data.data;
  } else {
    throw new Error('Failed to fetch patients');
  }
};

export const useChartData = () => {
    return useQuery<ChartData, Error>({
      queryKey: ["chartData"],
      queryFn: getChartData,
      staleTime: 24 * 60 * 60 * 1000, // 24 hours
      refetchOnWindowFocus: false,
    });
  };
