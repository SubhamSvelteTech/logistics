import Image from "next/image";
import React from "react";
import LocationIcon from "@Icons/location-icon.svg";
import JanetImg from "@Images/workorder/janet.svg";
import CallIcon from "@Icons/call-icon.svg";
import CalenderIcon from "@Icons/calender-icon.svg";

const PatientDetailCard = () => {
  return (
    <div className=" col-span-2 shadowBox p-2 rounded">
      <div className="flex gap-4">
        <div>
          <Image src={JanetImg} alt="" />
        </div>
        <div>
          <p className="font-bold">Mannu Sharma</p>
          <div className="flex items-center gap-2 mt-1">
            <Image src={LocationIcon} alt="" />
            <p className="font-light text-sm">Gurugram, sector 43</p>
          </div>
          <div className="flex flex-wrap items-center mt-2 gap-2">
            <button className="bg-teal text-white font-semibold text-sm px-4 py-2 rounded">
              View Prescription
            </button>
            <button className="bg-teal h-10 w-10 rounded-full flex justify-center items-center">
              <Image src={CallIcon} alt="" />
            </button>
            <button className="bg-teal h-10 w-10 rounded-full flex justify-center items-center">
              <Image src={CalenderIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetailCard;
