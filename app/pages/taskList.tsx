"use client";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import Status from "../(dashboard)/work-order/configuration-panel/ConfigurationComp/Status";
import { useSelector } from "react-redux";
import Dropdown from "../components/dropdown/Dropdown";
import SearchBar from "../components/searchbar/SearchBar";
import { workOrderdropdwonData } from "../constants/option";
import Image from "next/image";
import DefaultImg from "@Images/workorder/default-profile.png";
import ViewIcon from "@Icons/eye-icon.svg";
import DownloadIcon from "@Icons/download-icon.svg";
import { getTaskListData } from "../common/HelperFunctions";
import DeliveredIcon from "../components/icons/DeliveredIcon";
import ClockIcon from "@Icons/clock-icon.svg";

const TaskList = () => {
  const { selectedWorkOrder } = useSelector((state: any) => state);
  const [taskList, setTaskList] = useState<any>();
  const getTaskList = async () => {
    const res = await getTaskListData();
    console.log(res, "cxvdssd");
    if (res?.status === 200) {
      setTaskList(res?.data?.data);
    }
  };

  useEffect(() => {
    getTaskList();
  }, []);
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <div className="bg-[#F4F3F3] rounded-lg py-6 px-4 md:w-3/4">
        <BreadCrumb title="Task List" />
        <div className="grid md:grid-cols-8 gap-2 xxs:pr-8 mt-4">
          {workOrderdropdwonData?.map((item, index) => (
            <Dropdown title={item.title} options={item?.options} />
          ))}
          <SearchBar />
        </div>
        <div className="flex bg-gray-100 mt-6 gap-2">
          {/* Sidebar */}
          <div className="w-1/4 p-4 bg-white rounded-lg">
            <h2 className="text-xl font-bold mb-4">Filter</h2>
            <div className="space-y-2">
              <button className="w-full text-left bg-[#F2FAFF] border border-teal text-sm py-2 px-4 rounded">
                Semen
              </button>
              <button className="w-full text-left bg-white border text-sm py-2 px-4 rounded">
                Genetics
              </button>
              <button className="w-full text-left bg-white border text-sm py-2 px-4 rounded">
                Pathology
              </button>
            </div>

            {/* <h2 className="text-xl font-bold mt-8 mb-4">Tomorrow</h2>
            <div className="space-y-2">
              <button className="w-full text-left bg-white border text-sm py-2 px-4 rounded">
                General Blood Test
              </button>
              <button className="w-full text-left bg-white border text-sm py-2 px-4 rounded">
                Hormonal Testing
              </button>
              <button className="w-full text-left bg-white border text-sm py-2 px-4 rounded">
                FSH analysis
              </button>
              <button className="w-full text-left bg-white border text-sm py-2 px-4 rounded">
                General Blood Test
              </button>
              <button className="w-full text-left bg-white border text-sm py-2 px-4 rounded">
                Hormonal Testing
              </button>
              <button className="w-full text-left bg-white border text-sm py-2 px-4 rounded">
                FSH analysis
              </button>
            </div> */}
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-sm">
              <div className="flex justify-around p-4 bg-teal-600 text-sm bg-teal text-white">
                <span className="font-bold">Patients List</span>
                <span className="font-bold">Report</span>
                <span className="font-bold">Status</span>
                <span className="font-bold">Health Workers</span>
              </div>

              <div className=" px-2 py-2">
                {/* Patient Row */}
                {taskList?.map((taskData: any, index: number) => {
                  return taskData?.tasklist?.map(
                    (innerTask: any, index: number) => {
                      return (
                        <div className="relative flex items-center p-2 border  rounded mt-2">
                          <div className="flex-1 flex items-center space-x-4">
                            <Image
                              src={DefaultImg}
                              alt="patient-img"
                              width={50}
                              className="rounded"
                            />
                            <div>
                              <h3 className="text-sm font-semibold">
                                {taskData?.fullName}
                              </h3>
                              <p className="text-xs text-gray">
                                {innerTask?.workType}
                              </p>
                            </div>
                          </div>
                          <div className="flex-1 text-center">
                            <button className="text-teal-600">
                              <Image src={ViewIcon} alt="view-icon" />
                            </button>
                            <button className="text-teal-600 ml-4">
                              <Image src={DownloadIcon} alt="icon" />
                            </button>
                          </div>
                          <div
                            className={`${
                              innerTask?.taskStatus === "CLOSED"
                                ? "text-[#72BE27]"
                                : innerTask?.taskStatus === "BOOKED"
                                ? "text-teal"
                                : "text-yellow-500"
                            } flex-1 text-center font-bold`}
                          >
                            {innerTask?.taskStatus}
                          </div>
                          <div className="flex-1 text-center">
                            <Image
                              src={DefaultImg}
                              alt="patient-img"
                              width={50}
                              className="rounded"
                            />
                          </div>

                          <div
                            className={`absolute right-0 top-0 px-4 py-1 rounded-tr rounded-bl ${
                              status === "pending" && "p-1"
                            } ${
                              innerTask?.taskStatus === "BOOKED"
                                ? "bg-teal"
                                : innerTask?.taskStatus === "OPEN"
                                ? "bg-[#DBDBDB]"
                                : innerTask?.taskStatus === "CLOSED"
                                ? "bg-[#72BE27]"
                                : ""
                            }`}
                          >
                            <span className={`text-xs text-white`}>
                              {innerTask?.taskStatus === "BOOKED" ? (
                                "✔"
                              ) : innerTask?.taskStatus === "OPEN" ? (
                                <Image src={ClockIcon} alt="" />
                              ) : (
                                <DeliveredIcon />
                              )}
                            </span>
                          </div>
                        </div>
                      );
                    }
                  );
                })}

                {/* <div className="flex items-center p-2 border rounded mt-2">
                  <div className="flex-1 flex items-center space-x-4">
                    <Image
                      src={DefaultImg}
                      alt="patient-img"
                      width={50}
                      className="rounded"
                    />
                    <div>
                      <h3 className="text-xs font-semibold">Janet Whiteman</h3>
                      <p className="text-xs text-gray">IVF</p>
                    </div>
                  </div>
                  <div className="flex-1 text-center">
                    <button className="text-teal-600">
                      <Image src={ViewIcon} alt="view-icon" />
                    </button>
                    <button className="text-teal-600 ml-4">
                      <Image src={DownloadIcon} alt="icon" />
                    </button>
                  </div>
                  <div className="flex-1 text-center text-yellow-500 font-bold">
                    Pending
                  </div>
                  <div className="flex-1 text-center">
                    <Image
                      src={DefaultImg}
                      alt="patient-img"
                      width={50}
                      className="rounded"
                    />
                  </div>
                </div> */}
                {/* Repeat for more patients */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Status selectedWorkOrder={selectedWorkOrder} />
    </div>
  );
};

export default TaskList;
