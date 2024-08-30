import CustomSelect from "@/app/components/CustomSelect";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import { ASSIGN_TO } from "@/app/constants/apiEndpoints";
import axiosInstance from "@/services/utils/hooks/useApi";
import { getCookie } from "cookies-next";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const WorkOrderDropdown = ({
  selectedWorkOrder,
  address,
  assignto,
  id,
}: any) => {
  const { workOrder } = selectedWorkOrder;
  const taskId = getCookie("taskId");
  const [formFields, setFormFields] = useState<any>();
  const { assignTo } = useSelector((state: any) => state.assignTo);
  const { fetchAssignedToData } = useSelector(
    (state: any) => state.fetchAssignedToData
  );

  console.log(fetchAssignedToData,'fetchAssignedTo')

  useEffect(() => {
    if (workOrder?.tasklist && taskId) {
      const result = workOrder.tasklist.filter(
        (task: any) => task.taskId === taskId
      );
      setFormFields([
        {
          id: 1,
          ques: "W/O Type",
          title: "",
          options: [{ name: result[0]?.workType || "" }],
          identifier: "ordertype",
        },
        {
          id: 2,
          ques: "Status",
          title: "",
          options: [{ name: "Open" }],
          identifier: "status",
        },
        {
          id: 3,
          ques: "Address",
          title: "",
          options: [...(address || []), { name: "Add New Address" }],
          identifier: "address",
        },
        // {
        //   id: 4,
        //   ques: "Category",
        //   title: "General Blood Test",
        //   options: [{name:"1"},{name:"2"}],
        // },
        {
          id: 5,
          ques: "Assigned To",
          title: "",
          options: [...(fetchAssignedToData || [])],
          identifier: "assign",
        },
      ]);
    }
  }, [workOrder, taskId,fetchAssignedToData]);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const res = await axiosInstance.post(ASSIGN_TO, { ...assignTo });
    console.log(res, "qwertyuiop");
  };

  return (
    <>
      <ErrorBoundary>
        <div className="mt-4 lg:w-1/3">
          {formFields?.map((item: any, index: any) => (
            <>
              <div className="flex items-center gap-4 mt-6">
                <span className="w-1/3 font-bold text-xs">{item?.ques}</span>
                {/* <Dropdown options={item?.options} title={item?.title} /> */}
                <CustomSelect item={item} id={id} />
              </div>
            </>
          ))}
          <div className="flex text-center justify-end mt-8">
            <button
              onClick={(e) => handleSubmit(e)}
              className="font-bold bg-black text-white px-12 py-2 rounded  text-[11px]"
            >
              Schedule
            </button>
          </div>
        </div>
      </ErrorBoundary>
    </>
  );
};

export default WorkOrderDropdown;
