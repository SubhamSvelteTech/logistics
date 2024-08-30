"use client";
import React from "react";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import Dropdown from "../components/dropdown/Dropdown";
import SearchBar from "../components/searchbar/SearchBar";
import WorkOrderCard from "../(dashboard)/work-order/WorkOrderComp/WorkOrderCard";
import Image from "next/image";
import JanetImg from "@Images/workorder/janet.svg";
import { workOrderdropdwonData } from "../constants/option";
import { usePatients } from "@/services/utils/hooks/usePatients";
import ErrorBoundary from "../components/ErrorBoundary";

const WorkOrder = () => {
  const { data: patients } = usePatients();

  console.log(patients, "bvbdfvfs");
  return (
    <>
      <div className="bg-white rounded-lg py-6 px-8 over">
        <BreadCrumb title="Work Order" />
        <div className="grid md:grid-cols-8 gap-2 xxs:pr-8 mt-4">
          {workOrderdropdwonData?.map((item, index) => (
            <Dropdown title={item.title} options={item?.options} />
          ))}
          <SearchBar />
        </div>
        {/* work order list */}
        {patients?.map((item: any, index) => (
          <div className="flex border rounded-lg flex-nowrap mb-4 overflow-x-auto">
            <div className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0">
              <div className="rounded-lg p-4">
                <div className="mb-4">
                  <div className="flex gap-4 items-center">
                    <div>
                      <span className="bg-yellow-300 py-[4px] px-2 rounded-t ml-1 text-black text-[10px] font-semibold">
                        HWC
                      </span>
                      <Image src={JanetImg} alt="" className=" w-20" />
                    </div>
                    <div>
                      <p className="text-gray-900 text-xs font-semibold mt-6">
                        {item?.fullName}
                      </p>
                      <p className="text-gray-600 text-xs">{item?.country}</p>
                      <p className="text-teal font-bold text-xs">
                        {item?.prescriptionType}
                      </p>
                      <p className="font-semibold text-xs">
                        Priority:{" "}
                        <span className="text-teal">{item?.paymentStatus}</span>
                      </p>
                      <div className="flex justify-center">
                        <button className="bg-teal text-white text-[10px] py-2 px-2 font-semibold rounded mt-2">
                          View Prescription
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {item?.tasklist?.map((order: any, i: number) => (
              <div key={i} className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0">
                <WorkOrderCard
                  data={order}
                  item={item}
                  image={order?.image}
                  status="pending"
                  assigned={false}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkOrder;
