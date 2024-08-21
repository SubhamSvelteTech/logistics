import React from "react";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import PatientDetailCard from "../(dashboard)/work-order/configuration-panel/ConfigurationComp/PatientDetailCard";
import WorkOrderQueueCard from "../(dashboard)/work-order/configuration-panel/ConfigurationComp/WorkOrderQueueCard";
import CalenderWithSlots from "../(dashboard)/work-order/configuration-panel/ConfigurationComp/CalenderWithSlots";
import WorkOrderDropdown from "../(dashboard)/work-order/configuration-panel/ConfigurationComp/WorkOrderDropdown";
import YourOrder from "../(dashboard)/work-order/configuration-panel/ConfigurationComp/YourOrder";
import Status from "../(dashboard)/work-order/configuration-panel/ConfigurationComp/Status";

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
        <Status />
      </div>
    </>
  );
};

export default ConfigurationPanel;
