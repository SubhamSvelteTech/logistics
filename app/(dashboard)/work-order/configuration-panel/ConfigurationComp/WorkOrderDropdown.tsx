import Dropdown from "@/app/components/dropdown/Dropdown";
import { title } from "process";
import React from "react";

const WorkOrderDropdown = () => {
  const formFields: any = [
    { id: 1, ques: "W/O Type", title: "Blood Test", options: ["1", "2", "3"] },
    { id: 2, ques: "Status", title: "Open", options: ["1", "2", "3"] },
    { id: 3, ques: "Address", title: "", options: ["1", "2", "3"] },
    {
      id: 4,
      ques: "Category",
      title: "General Blood Test",
      options: ["1", "2", "3"],
    },
    { id: 5, ques: "Assigned To", title: "", options: ["1", "2", "3"] },
  ];
  return (
    <>
      <div className="mt-4 lg:w-1/3">
        {formFields?.map((item:any, index:any) => (
          <>
            <div className="flex items-center gap-4 mt-6">
              <span className="w-1/3 font-bold text-xs">{item?.ques}</span>
              <Dropdown options={item?.options} title={item?.title} />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default WorkOrderDropdown;
