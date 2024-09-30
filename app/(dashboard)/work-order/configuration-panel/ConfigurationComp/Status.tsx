import Image from "next/image";
import React, { useState } from "react";
import LocationIcon from "@Icons/location-icon.svg";
import JanetImg from "@Images/workorder/janet.svg";
import CallIcon from "@Icons/call-icon.svg";
import CalenderIcon from "@Icons/calender-icon.svg";
import ChatBox from "./ChatBox";
import TimelineComponent from "./Timeline";
import { useSelector } from "react-redux";
import axiosInstance from "@/services/utils/hooks/useApi";
import { SEND_CALLING } from "@/app/constants/apiEndpoints";

const Status = ({selectedWorkOrder}:any) => {
    const { workOrder } = selectedWorkOrder;
    const assignedUser = useSelector((state:any) => state?.assignedUser?.assignedUser)
    console.log(assignedUser,"assignedUser")

    const sendCallNotificationApi = async(patientId:string) => {
      // let payload = {
      //       title:"Hi Deepanshu",
      //       patientId:"66d55274e9d279c09487c5fd"  
      // }
  
      let payload = {
        receiverId:patientId,
        receiverType:"LogisticUser"
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
  
    if(assignedUser?.fullName?.length > 0){
      return (
        <div className="bg-white rounded-lg md:w-1/3 lg:w-1/4">
          <div className="bg-teal flex justify-center rounded-t-lg px-8 py-2">
            <span className="text-white font-bold">Status</span>
          </div>
    
          <div className="px-2 py-2">
            <div className="flex gap-4">
              <div>
                <Image src={JanetImg} alt="" className="w-[60px]" />
              </div>
              <div>
                <p className="font-bold text-[13px]">{assignedUser?.fullName}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Image src={LocationIcon} alt="" />
                  <p className="font-light text-[10px]">{assignedUser?.state}, {assignedUser?.country}</p>
                </div>
                <div>
                  <p className="font-light text-[10px]">{assignedUser?.mobile}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-around items-center mt-2 gap-2">
              <button className="bg-teal h-[30px] w-[30px] rounded-full flex justify-center items-center">
                <Image src={CallIcon} onClick={() => sendCallNotification(assignedUser?._id)} alt="" className="w-[12px]" />
              </button>
              {/* <button className="bg-teal h-[30px] w-[30px] rounded-full flex justify-center items-center">
                <Image src={CalenderIcon} alt="" className="w-[11px]" />
              </button>
              <button className="bg-teal h-[30px] w-[30px] rounded-full flex justify-center items-center">
                <Image src={CalenderIcon} alt="" className="w-[11px]" />
              </button>
              <button className="bg-teal h-[30px] w-[30px] rounded-full flex justify-center items-center">
                <Image src={CalenderIcon} alt="" className="w-[11px]" />
              </button> */}
            </div>
    
            {/* <div className="mt-4">
              <ChatBox />
            </div> */}
            {/* <div className="mt-4">
              <TimelineComponent />
            </div> */}
          </div>
        </div>
      );
    }

};

export default Status;
