import Image from "next/image";
import React from "react";
import LocationIcon from "@Icons/location-icon.svg";
import JanetImg from "@Images/workorder/janet.svg";
import CallIcon from "@Icons/call-icon.svg";
import CalenderIcon from "@Icons/calender-icon.svg";

const PatientDetailCard = () => {
  return (
    <div className="col-span-1 shadowBox p-2 rounded">
      <div className="flex gap-2">
        <div>
          <Image src={JanetImg} alt="" className=" w-12" />
        </div>
        <div>
          <p className="font-bold text-[12px]">Mannu Sharma</p>
          <div className="flex items-center gap-1 mt-1">
            <Image src={LocationIcon} alt="" />
            <p className="font-light text-[10px]">Gurugram, sector 43</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-2 gap-2">
            <button className="bg-teal text-white text-[10px] font-semibold px-2 py-1 rounded text-[9px]">
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
