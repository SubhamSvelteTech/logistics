"use client";
import React from "react";
import Image from "next/image";
import LocationIcon from "@Icons/location-icon.svg";
import DefaultImg from "@Images/workorder/default-profile.png";
import { useSelector } from "react-redux";
import DeliveredIcon from "@/app/components/icons/DeliveredIcon";
import ClockIcon from "@Icons/clock-icon.svg";

const TaskSidebar = ({taskdata}:any) => {
  const { workOrder } = useSelector((state: any) => state?.selectedWorkOrder);
  return (
    <>
      <div className="bg-white rounded-lg md:w-1/3 lg:w-1/4 shadowBox">
        <div className="px-4 py-4">
          <div className="relative flex gap-4 border border-[#D2D4D9] rounded py-2 px-4">
            <div
              className={`absolute right-0 top-0 px-4 py-1 rounded-tr rounded-bl ${
                status === "pending" && "p-1"
              } ${
                taskdata?.taskStatus === "BOOKED"
                  ? "bg-teal"
                  : taskdata?.taskStatus === "OPEN"
                  ? "bg-[#DBDBDB]"
                  : taskdata?.taskStatus === "CLOSED"
                  ? "bg-[#72BE27]"
                  : ""
              }`}
            >
              <span className={`text-xs text-white`}>
                {taskdata?.taskStatus === "BOOKED" ? (
                  "✔"
                ) : taskdata?.taskStatus === "OPEN" ? (
                  <Image src={ClockIcon} alt="" />
                ) : (
                  <DeliveredIcon />
                )}
              </span>
            </div>
            <div>
              <Image src={DefaultImg} alt="" className="w-[60px]" />
            </div>
            <div>
              <p className="font-bold text-[13px]">{workOrder?.fullName || "NA"}</p>
              <div className="flex items-center gap-2 mt-1">
                <Image src={LocationIcon} alt="" />
                <p className="font-light text-[10px]">
                  {workOrder?.state}, {workOrder?.country}
                </p>
              </div>
              <div>
                <p className="font-light text-[10px]">
                  {workOrder?.mobileNumber}
                </p>
              </div>
            </div>
          </div>

          <hr className="mt-4" />

          <div className="mt-4">
            <span className="font-bold text-lg">Notes</span>
            <p className="text-sm">
              {workOrder?.notes ? workOrder?.notes : "No Notes Available"}
            </p>
          </div>

          <hr className="mt-4" />

          <div className="mt-4">
            <span className="font-bold text-lg">Alerts</span>
            <li className="text-red-500 text-sm">No Alerts!</li>
          </div>

          {/* nurse */}
          {/* <div className="flex gap-2 border border-[#D2D4D9] rounded py-2 px-4 mt-6 shadowBox">
            <div>
              <Image src={DefaultImg} alt="" className="w-[60px]" />
            </div>
            <div>
              <p className="font-bold text-[13px]">Sheetal Sharma</p>
              <p className="font-light text-[10px]">+91 4008 800 232</p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default TaskSidebar;
