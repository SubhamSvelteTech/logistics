"use client";
import React, { useEffect, useRef, useState } from "react";
import Filters from "./Filters";
import WorkChart from "./WorkChart";
import Rating from "./Rating";
import { LOGISTIC_DASHBOARD_CHART } from "@/app/constants/apiEndpoints";
import useApiHandle from "@/services/utils/hooks/useApi";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { apiRequest, loading, error } = useApiHandle();
  const { data: session, status } = useSession();
  const [dashboardData, setDashboardData] = useState<any>({})
  const [isLoading, setIsLoading] = useState(false)
  const dataFetchedRef = useRef(false);
  const getChartData = async () => {
    try {
      const result = await apiRequest(`${LOGISTIC_DASHBOARD_CHART}`, "GET");
      setDashboardData(result?.data?.data)
    } catch (error) {
      console.error("Failed to fetch chart data:", error);
    }
  };

  useEffect(() => {
    if (
      status === "authenticated" &&
      session?.user?.accessToken &&
      !dataFetchedRef.current
    ) {
      dataFetchedRef.current = true;
      getChartData();
    }
  }, [status, session]);
  return (
    <>
      <div className="bg-white rounded-lg p-4">
        <Filters />
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="flex-1 bg-white rounded shadowBox">
            <WorkChart dashboardData={dashboardData}/>
          </div>
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <div className="shadowBox rounded-lg px-4 py-4">
              <span className="text-[18px] font-[700]">
                Patient <br />
                Satisfaction
              </span>
              <div>
                <Rating />
              </div>
            </div>
            <div className="flex items-center shadowBox bg-teal rounded-lg py-12 px-12">
              <p className="text-[26px] text-white font-[700]">
                NPS <span className="text-[44px]">70</span>
              </p>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col md:flex-row gap-2 mt-4">
          <div className="shadowBox py-4 px-8 rounded w-full md:flex-1">
            {" "}
            {/* Added w-full and md:flex-1 */}
            <span className="font-bold text-lg">All Locations</span>
            <div>
              <span className="text-[34px] font-[700]">1500 </span>
              <span className="text-xs font-semibold">
                {" "}
                Total samples collected
              </span>
            </div>
            <div>
              <span className="text-[34px] font-[700]">332 </span>
              <span className="text-xs font-semibold"> Pending samples</span>
            </div>
          </div>
          <div className="shadowBox py-4 px-8 rounded w-full md:flex-1">
            {" "}
            {/* Added w-full and md:flex-1 */}
            <span className="font-bold text-lg">Lead Time</span>
            <div>
              <span className="text-[50px] font-[700]">12 </span>
              <span className="text-lg font-semibold">minutes</span>
            </div>
          </div>
          <div className="shadowBox py-4 px-8 rounded w-full md:flex-1">
            {" "}
            {/* Added w-full and md:flex-1 */}
            <span className="font-bold text-lg">Total Work Orders</span>
            <div>
              <span className="text-[50px] font-[700]">{dashboardData?.todayTotalTask}</span>
              <span className="text-lg font-semibold">orders</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
