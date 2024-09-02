"use client";
import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import WorkChart from "./WorkChart";
import Rating from "./Rating";
import { useRouter } from "next/navigation";
import { useChartData } from "@/services/utils/hooks/useChartData";
import { getChartData } from "@/app/common/HelperFunctions";

const Dashboard = () => {
  const [chartData, setChartData] = useState<any>();
  const router = useRouter();
  // const { data: chartData } = useChartData();
  const getChartDataFromApi = async () => {
    const res = await getChartData();
    setChartData(res);
  };
  useEffect(() => {
    getChartDataFromApi();
  }, []);
  return (
    <>
      <div className="bg-white rounded-lg p-4">
        {/* <Filters /> */}
        <div className=" gap-4 mt-4">
          <div className="bg-white rounded shadowBox">
            <WorkChart dashboardData={chartData} />
          </div>
          {/* <div className="flex flex-col gap-2 w-full md:w-auto">
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
          </div> */}
        </div>

        {/*  */}
        <div className="flex flex-col md:flex-row gap-2 mt-4">
          <div className="shadowBox hover:cursor-pointer py-4 rounded w-full md:flex-1 hover:shadow-md hover:shadow-teal">
            {/* Added w-full and md:flex-1 */}
            <div className="flex justify-center">
              <span className="font-bold text-lg">Delivery Executives</span>
            </div>
            <div className="flex justify-center py-4">
              <span className="text-[60px] font-[700]">
                {chartData?.totalDeliveredTask || 0}
              </span>
            </div>
          </div>
          <div className="shadowBox py-4 px-8 rounded w-full md:flex-1">
            <div className="flex justify-center">
            <span className="font-bold text-lg">Total Prescription</span>
            </div>
            <div className="flex justify-center py-4">
              <span className="text-[60px] font-[700]">{chartData?.totalPrescription || 0} </span>
            </div>
          </div>

          <div
            onClick={() => router.push("/work-order")}
            className="shadowBox hover:cursor-pointer py-4 px-8 rounded w-full md:flex-1 hover:shadow-md hover:shadow-teal"
          >
            <div className="flex justify-center">
            <span className="font-bold text-lg">Total Work Orders</span>
            </div>
            <div className="flex justify-center">
              <span className="text-[60px] font-[700] py-4">
                {chartData?.totalPrescription || 0}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
