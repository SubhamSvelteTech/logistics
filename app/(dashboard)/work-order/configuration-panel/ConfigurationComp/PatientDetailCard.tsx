"use client";
import Image from "next/image";
import React from "react";
import LocationIcon from "@Icons/location-icon.svg";
import CallIcon from "@Icons/call-icon.svg";
import CalenderIcon from "@Icons/calender-icon.svg";
import { openModal } from "@/Redux/Slices/modalSlice";
import { useDispatch } from "react-redux";
import DefaultImg from "@Images/workorder/default-profile.png";

const PatientDetailCard = ({ selectedWorkOrder }: any) => {
  const { workOrder } = selectedWorkOrder;
  console.log(selectedWorkOrder, "selectedWorkOrder");
  const dispatch = useDispatch();
  return (
    <div className="col-span-1 shadowBox p-2 rounded">
      <div className="flex gap-2">
        <div>
          {workOrder?.profilePicture?.length > 0 ? (
            <img
              src={`http://192.168.15.49:5000/uploads/logistic/${workOrder?.profilePicture}`}
              width={50}
              height={50}
            />
          ) : (
            <Image src={DefaultImg} alt="default-img" width={50} />
          )}
        </div>
        <div>
          <p className="font-bold text-[12px]">{workOrder?.fullName}</p>
          <div className="flex items-center gap-1 mt-1">
            <Image src={LocationIcon} alt="" />
            <p className="font-light text-[10px]">
              {workOrder?.city}, {workOrder?.country}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-2 gap-2">
        <button
          onClick={() => dispatch(openModal({ id: "prescription" }))}
          className="bg-teal text-white text-[10px] font-semibold px-2 py-1 rounded text-[9px]"
        >
          View Prescription
        </button>
        <button className="bg-teal h-[22px] w-[22px] rounded-full flex justify-center items-center">
          <Image src={CallIcon} alt="" className="w-[10px]" />
        </button>
        <button className="bg-teal h-[22px] w-[22px] rounded-full flex justify-center items-center">
          <Image src={CalenderIcon} alt="" className="w-[10px]" />
        </button>
      </div>
    </div>
  );
};

export default PatientDetailCard;
