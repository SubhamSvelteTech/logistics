import Image from "next/image";
import React from "react";
import DefaultImg from "@Images/workorder/default-profile.png";
import { getCookie, setCookie } from "cookies-next";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAssignTo } from "@/Redux/Slices/assignToSlice";

const WorkOrderQueueCard = ({ selectedWorkOrder }: any) => {
  const { workOrder } = selectedWorkOrder;
  const dispatch = useDispatch()

  const [currentTaskId, setCurrentTaskId] = useState<string | undefined>(
    getCookie("taskId") as string | undefined
  );

  useEffect(()=>{
    const tasklist = workOrder?.tasklist || [];
    const currentTask = tasklist.find((task:any) => task.taskId === currentTaskId);
    console.log(currentTask,'bfbfds',workOrder.tasklist,currentTaskId)
    const payload = {
      taskId: currentTaskId,
      workType:currentTask?.workType?.toUpperCase()
    }    
    dispatch(addAssignTo({...payload}))

  },[workOrder?.tasklist])

  console.log(workOrder?.tasklist,'vdsfdsv')

  return (
    <div className="border col-span-2 gap-2 items-center rounded p-2 md:mt-0 mt-4">
      <div className="flex overflow-x-auto gap-2 scrollbar-hide">
        {workOrder?.tasklist?.map((item: any, index: number) => (
          <div
            key={index}
            className="shadowBox px-4 py-2 rounded min-w-[175px]"
          >
            <span className="font-bold text-sm">{item?.workType}</span>
            <div className="flex items-center mt-2 gap-4">
              <Image
                className="h-[40px] w-[40px] rounded-full"
                src={DefaultImg}
                alt=""
              />
              <button
                disabled={item?.taskId !== currentTaskId}
                className={`${
                  item?.taskId === currentTaskId
                    ? "bg-[#FFC700]"
                    : item?.taskStatus === "CLOSED" ? "bg-[#72BE27] text-white" : item?.taskStatus === "BOOKED" ? "bg-teal text-white" : "bg-gray text-white"
                } text-[#474747] px-2 py-1 font-bold rounded text-[10px]`}
              >
                {item?.taskId === currentTaskId ? "Processing..." : item?.taskStatus === "CLOSED" ? "Closed" : item?.taskStatus === "BOOKED" ? "Assigned" : "Assign"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkOrderQueueCard;
