import CustomSelect from "@/app/components/CustomSelect";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import { ASSIGN_TO } from "@/app/constants/apiEndpoints";
import { openModal } from "@/Redux/Slices/modalSlice";
import axiosInstance from "@/services/utils/hooks/useApi";
import { getCookie } from "cookies-next";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const WorkOrderDropdown = ({ selectedWorkOrder, assignto, id }: any) => {
  const { workOrder } = selectedWorkOrder;
  const taskId = getCookie("taskId");
  const [formFields, setFormFields] = useState<any>();
  const { assignTo } = useSelector((state: any) => state.assignTo);
  const { fetchAssignedToData } = useSelector(
    (state: any) => state.fetchAssignedToData
  );
  const dispatch = useDispatch();
  const { patientAddress } = useSelector((state: any) => state.patientAddress);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const requiredKeys = [
    "orderStatus",
    "taskId",
    "workType",
    "patientId",
    "assignedDate",
    "startTime",
    "slotId",
    "slotBookedId",
    "address",
    "addressId",
    "logisticId",
  ];

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
          options: [...(patientAddress || []), { name: "Add New Address" }],
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
  }, [workOrder, taskId, fetchAssignedToData, patientAddress]);

  useEffect(() => {
    const isAllKeysPresent = requiredKeys.every((key: any) =>
      assignTo.hasOwnProperty(key)
    );
    setIsButtonDisabled(!isAllKeysPresent);
  }, [assignTo]);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(openModal({ id: "confirm-booking" }));
  };

  return (
    <>
      <ErrorBoundary>
        <div className="mt-4 lg:w-1/3">
          {formFields?.map((item: any, index: any) => (
            <div
              className="flex items-center gap-4 mt-6"
              key={`workdropdown-${index}`}
            >
              <span className="w-1/3 font-bold text-xs">{item?.ques}</span>
              {/* <Dropdown options={item?.options} title={item?.title} /> */}
              <CustomSelect item={item} id={id} />
            </div>
          ))}
          <div className="flex text-center justify-end mt-8">
            <button
              disabled={isButtonDisabled}
              onClick={(e) => handleSubmit(e)}
              className={`font-bold text-white px-12 py-2 rounded  text-[11px] ${
                isButtonDisabled ? "bg-gray" : "bg-black"
              }`}
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
