import Image from "next/image";
import React from "react";
import DefaultImg from "@Images/workorder/default-profile.png";

const WorkOrderQueueCard = () => {
  return (
    <div className="border col-span-2 gap-2 items-center rounded p-2 md:mt-0 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-2">
        <div className="shadowBox px-4 py-2 rounded">
          <span className="font-bold text-sm">Blood Test</span>
          <div className="flex items-center mt-2 gap-4">
            <Image className="h-[40px] w-[40px] rounded-full" src={DefaultImg} alt="" />
            <button className="bg-[#FFC700] text-[#474747] px-2 py-1 font-bold rounded text-[10px]">
              Processing...
            </button>
          </div>
        </div>
        <div className="shadowBox px-4 py-2">
          <span className="font-bold text-sm">Drugs</span>
          <div className="flex items-center mt-2 gap-4">
            <Image className="h-[40px] w-[40px] rounded-full" src={DefaultImg} alt="" />
            <button className="bg-black text-xs text-white px-4 py-1 font-bold rounded text-[10px]">
              Assign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOrderQueueCard;
