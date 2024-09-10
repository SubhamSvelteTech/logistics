"use client";
import Image from "next/image";
import React, { useState } from "react";
import LocationIcon from "@Icons/location-icon.svg";
import CallIcon from "@Icons/call-icon.svg";
import CalenderIcon from "@Icons/calender-icon.svg";
import { openModal } from "@/Redux/Slices/modalSlice";
import { useDispatch } from "react-redux";
import DefaultImg from "@Images/workorder/default-profile.png";
import axiosInstance from "@/services/utils/hooks/useApi";
import { SEND_CALLING } from "@/app/constants/apiEndpoints";
import { useSession } from "next-auth/react";
import { CustomImage } from "@/app/components/custom-image/CustomImage";

const PatientDetailCard = ({ selectedWorkOrder }: any) => {
  const { workOrder } = selectedWorkOrder;
  console.log(workOrder, "selectedWorkOrder");
  // const dispatch = useDispatch();
  const sendCallNotificationApi = async(patientId:string) => {
    // let payload = {
    //       title:"Hi Deepanshu",
    //       patientId:"66d55274e9d279c09487c5fd"  
    // }

    let payload = {
      title:"Call From Logistics Manager",
      patientId:patientId
    }

    

    const res = await axiosInstance?.post(SEND_CALLING,payload)
    if(res.status === 200){
      window.open(`/call/${res?.data?.data?.webLivekitToken}`, "_blank", "noopener");
    }
  }

  const sendCallNotification = (patientId:string) => {
    console.log("patientId",patientId)
    sendCallNotificationApi(patientId)
  }

  return (
    <div className="col-span-1 shadowBox p-2 rounded">
      <div className="flex gap-2">
        <div>
          {workOrder?.profilePicture && (
            <CustomImage
              src={workOrder?.profilePicture}
              alt="profile-picture"
            />
          )}
        </div>
        <div>
          <p className="font-bold text-[12px]">{workOrder?.fullName}</p>
          <div className="flex items-center gap-1 mt-1">
            <Image src={LocationIcon} alt="" />
            <p className="font-light text-[10px]">
              {workOrder?.city}
              {workOrder?.city && ","} {workOrder?.country}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-2 gap-2">
        <a
          target="_blank"
          href={`${workOrder?.prescription_pdf}`}
          className="bg-teal text-white text-[12px] font-semibold px-2 py-1 rounded"
        >
          View Prescription
        </a>
        {
        <button className="bg-teal h-[22px] w-[22px] rounded-full flex justify-center items-center" onClick={() => sendCallNotification(workOrder?._id)}>
          <Image src={CallIcon} alt="" className="w-[10px]" />
        </button>
}
        
        {/* <button className="bg-teal h-[22px] w-[22px] rounded-full flex justify-center items-center">
          <Image src={CalenderIcon} alt="" className="w-[10px]" />
        </button>  */}
        
      </div>
    </div>
  );
};

export default PatientDetailCard;
