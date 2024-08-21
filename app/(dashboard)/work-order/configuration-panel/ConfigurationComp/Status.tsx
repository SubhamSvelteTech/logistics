import Image from "next/image";
import React from "react";
import LocationIcon from "@Icons/location-icon.svg";
import JanetImg from "@Images/workorder/janet.svg";
import CallIcon from "@Icons/call-icon.svg";
import CalenderIcon from "@Icons/calender-icon.svg";
import ChatBox from "./ChatBox";
import TimelineComponent from "./Timeline";

const Status = () => {
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
            <p className="font-bold text-[13px]">Mannu Sharma</p>
            <div className="flex items-center gap-2 mt-1">
              <Image src={LocationIcon} alt="" />
              <p className="font-light text-[10px]">Gurugram, sector 43</p>
            </div>
            <div>
              <p className="font-light text-[10px]">+91 4008 800 232</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-around items-center mt-2 gap-2">
          <button className="bg-teal h-[30px] w-[30px] rounded-full flex justify-center items-center">
            <Image src={CallIcon} alt="" className="w-[12px]" />
          </button>
          <button className="bg-teal h-[30px] w-[30px] rounded-full flex justify-center items-center">
            <Image src={CalenderIcon} alt="" className="w-[11px]" />
          </button>
          <button className="bg-teal h-[30px] w-[30px] rounded-full flex justify-center items-center">
            <Image src={CalenderIcon} alt="" className="w-[11px]" />
          </button>
          <button className="bg-teal h-[30px] w-[30px] rounded-full flex justify-center items-center">
            <Image src={CalenderIcon} alt="" className="w-[11px]" />
          </button>
        </div>

        <div className="mt-4">
          <ChatBox />
        </div>
        <div className="mt-4">
          <TimelineComponent />
        </div>
      </div>
    </div>
  );
};

export default Status;
