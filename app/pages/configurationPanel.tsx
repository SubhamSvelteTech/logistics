import React from "react";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import PatientDetailCard from "../(dashboard)/work-order/configuration-panel/ConfigurationComp/PatientDetailCard";
import WorkOrderQueueCard from "../(dashboard)/work-order/configuration-panel/ConfigurationComp/WorkOrderQueueCard";
import CalenderWithSlots from "../(dashboard)/work-order/configuration-panel/ConfigurationComp/CalenderWithSlots";
import WorkOrderDropdown from "../(dashboard)/work-order/configuration-panel/ConfigurationComp/WorkOrderDropdown";
import YourOrder from "../(dashboard)/work-order/configuration-panel/ConfigurationComp/YourOrder";

const ConfigurationPanel = () => {
  return (
    <>
      <div className="bg-white rounded-lg py-6 px-8">
        <BreadCrumb title="Configuration Panel" />

        <div className="grid md:grid-cols-5 grid-cols-1 mt-6 md:gap-4">
          <PatientDetailCard/>
          <WorkOrderQueueCard/>
        </div>

        {/* calendar */}
        <div className="grid grid-cols-1 xl:grid-cols-2 mt-6 gap-4">
            {/* calender */}
            <CalenderWithSlots/>
            <WorkOrderDropdown/>
        </div>
        <hr className="mt-4 border-[1px]"/>
        <YourOrder/>
      </div>
    </>
  );
};

export default ConfigurationPanel;
