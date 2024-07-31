import React from "react";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import Dropdown from "../components/dropdown/Dropdown";
import SearchBar from "../components/searchbar/SearchBar";
import WorkOrderCard from "../(dashboard)/work-order/WorkOrderComp/WorkOrderCard";
import Image from "next/image";
import JanetImg from "@Images/workorder/janet.svg";
import { workOrderdropdwonData, workOrderList } from "../constants/option";

const WorkOrder = () => {
  return (
    <>
      <div className="bg-white rounded-lg py-6 px-8">
        <BreadCrumb title="Work Order" />
        <div className="grid md:grid-cols-8 gap-2 xxs:pr-8 mt-4">
          {workOrderdropdwonData?.map((item, index) => (
            <Dropdown title={item.title} options={item?.options} />
          ))}
          <SearchBar />
        </div>
        {/* work order list */}
        {workOrderList?.map((item, index) => (
          <div className="flex border rounded-lg flex-wrap mb-4">
            <div className="w-full md:w-1/2 lg:w-1/4">
              <div className="rounded-lg p-4">
                <div className="mb-4">
                  <div className="flex gap-4 items-center">
                    <div>
                      <span className="bg-yellow-300 py-[4px] px-2 rounded-t ml-1 text-black text-xs font-semibold">
                        HWC
                      </span>
                      <Image src={JanetImg} alt="" />
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm font-semibold">
                        {item?.name}
                      </p>
                      <p className="text-gray-600 text-sm">{item?.address}</p>
                      <p className="text-teal font-bold text-sm">
                        {item?.treatment}
                      </p>
                      <p className="font-semibold">
                        Priority:{" "}
                        <span className="text-teal">{item?.priority}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center pl-12">
                  <button className="bg-teal text-white text-xs py-2 px-2 font-semibold rounded">
                    View Prescription
                  </button>
                </div>
              </div>
            </div>
            {item?.workorder?.map((order, i) => (
              <WorkOrderCard
                title={order?.type}
                name={order?.name}
                role={order?.role}
                image={order?.image}
                status={order?.status}
                priority={order?.priority}
                assigned={order?.assigned}
              />
            ))}
            {/* <div className="flex items-center justify-center px-16">
            <button
              type="button"
              className="text-white bg-teal font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              <span className="sr-only">Icon description</span>
            </button>
          </div> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkOrder;
