import Image from 'next/image'
import React from 'react'
import DefaultImg from "@Images/workorder/default-profile.png";

const WorkOrderQueueCard = () => {
  return (
<div className="border col-span-3 gap-2 items-center rounded p-2 md:mt-0 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-2">
            <div className="shadowBox px-6 py-2 rounded">
              <span className="font-bold">Blood Test</span>
              <div className="flex items-center mt-2 gap-12">
                <Image
                  className="h-14 w-14 rounded-full"
                  src={DefaultImg}
                  alt=""
                />
                <button className="bg-[#FFC700] text-[#474747] px-6 py-2 font-bold rounded">
                  Processing...
                </button>
              </div>
            </div>
            <div className="shadowBox px-6 py-2">
              <span className="font-bold">Drugs</span>
              <div className="flex items-center mt-2 gap-12">
                <Image
                  className="h-14 w-14 rounded-full"
                  src={DefaultImg}
                  alt=""
                />
                <button className="bg-black text-white px-8 py-2 font-bold rounded">
                  Assign
                </button>
              </div>
            </div> 
            </div>
          </div>
  )
}

export default WorkOrderQueueCard