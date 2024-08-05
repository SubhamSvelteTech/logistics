import React from "react";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import PatientDetailCard from "../(dashboard)/work-order/configuration-panel/ConfigurationComp/PatientDetailCard";
import WorkOrderQueueCard from "../(dashboard)/work-order/configuration-panel/ConfigurationComp/WorkOrderQueueCard";
import CalenderWithSlots from "../(dashboard)/work-order/configuration-panel/ConfigurationComp/CalenderWithSlots";
import WorkOrderDropdown from "../(dashboard)/work-order/configuration-panel/ConfigurationComp/WorkOrderDropdown";
import YourOrder from "../(dashboard)/work-order/configuration-panel/ConfigurationComp/YourOrder";
import Image from "next/image";
import LocationIcon from "@Icons/location-icon.svg";
import JanetImg from "@Images/workorder/janet.svg";
import CallIcon from "@Icons/call-icon.svg";
import CalenderIcon from "@Icons/calender-icon.svg";

const ConfigurationPanel = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="bg-white rounded-lg py-6 px-4 md:w-3/4">
          <BreadCrumb title="Configuration Panel" />

          <div className="grid lg:grid-cols-4 grid-cols-1 mt-6 md:gap-4">
            <PatientDetailCard />
            <WorkOrderQueueCard />
          </div>

          {/* calendar */}
          <div className="flex flex-col md:flex-col lg:flex-row mt-6 gap-4">
            {/* calender */}
            <CalenderWithSlots />
            <WorkOrderDropdown />
          </div>
          <hr className="mt-4 border-[1px]" />
          <YourOrder />
        </div>
        {/* status */}
        <div className="bg-white rounded-lg md:w-1/3 lg:w-1/4">
          <div className="bg-teal flex justify-center rounded-t-lg px-8 py-2">
            <span className="text-white font-bold">Status</span>
          </div>

          <div className="px-4 py-2">
            <div className="flex gap-4">
              <div>
                <Image src={JanetImg} alt="" className="w-[60px]"/>
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
                    <Image src={CallIcon} alt="" className="w-[12px]"/>
                  </button>
                  <button className="bg-teal h-[30px] w-[30px] rounded-full flex justify-center items-center">
                    <Image src={CalenderIcon} alt="" className="w-[11px]"/>
                  </button>
                  <button className="bg-teal h-[30px] w-[30px] rounded-full flex justify-center items-center">
                    <Image src={CalenderIcon} alt="" className="w-[11px]"/>
                  </button>
                  <button className="bg-teal h-[30px] w-[30px] rounded-full flex justify-center items-center">
                    <Image src={CalenderIcon} alt="" className="w-[11px]"/>
                  </button>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfigurationPanel;
