"use client";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import { useDispatch } from "react-redux";
import SearchBar from "../components/searchbar/SearchBar";
import Image from "next/image";
import DefaultImg from "@Images/workorder/default-profile.png";
import ViewIcon from "@Icons/eye-icon.svg";
import DownloadIcon from "@Icons/download-icon.svg";
import { downloadPDFFile, getTaskListData } from "../common/HelperFunctions";
import DeliveredIcon from "../components/icons/DeliveredIcon";
import ClockIcon from "@Icons/clock-icon.svg";
import Link from "next/link";
import TaskSidebar from "../(dashboard)/task-list/TaskSidebar/TaskSidebar";
import { getCookie, setCookie } from "cookies-next";
import ChevronLeft from "../components/icons/ChevronLeft";
import ChevronRight from "../components/icons/ChevronRight";
import { addWorkOrderTask } from "@/Redux/Slices/selectedWorkOrderSlice";
import Pagination from "../components/pagination/Pagination";
import useInfiniteScroll from "@/services/utils/hooks/useInfiniteScroll";
import { CustomImage } from "../components/custom-image/CustomImage";

const filter = [
  { id: 1, name: "Semen", payload: "Siman" },
  { id: 2, name: "Genetics", payload: "Genetics" },
  { id: 3, name: "Pathology", payload: "Pathology" },
  { id: 3, name: "All", payload: "" },
];

const TaskList = () => {
  const [patients, setPatients] = useState<any[]>([]);
  const taskId = getCookie("taskId");
  const [taskdata, setTaskdata] = useState<any>();
  const [selectedFilter, setSelectedFilter] = useState<string | null>("");
  const dispatch = useDispatch();
  const [hasMore, setHasMore] = useState(true);

  // const taskListdata = async () => {
  //   const res = await getTaskListData(0);
  //   setPatients(res?.data);
  // };

  // useEffect(() => {
  //   taskListdata();
  // }, []);

  const handleTaskClick = (data: any, id: any) => {
    setCookie("taskId", id?.taskId);
    setTaskdata(id);
    dispatch(addWorkOrderTask(data));
  };

  useEffect(() => {
    dispatch(addWorkOrderTask(patients?.[0]));
    setTaskdata(patients?.[0]?.tasklist?.[0]);
  }, [patients]);

  const handleFilterClick = async (name: string) => {
    setSelectedFilter(name);
    const res = await getTaskListData(0, name);
    if (res?.status === 200) {
      setPatients(res?.data?.data);
    }
  };

  const handleSearch = async (query: string) => {
    if (query.length > 0) {
      const res = await getTaskListData(0, "", query);
      if (res?.status === 200) {
        setPatients(res?.data?.data);
      }
  };
}

  const fetchData = async (page: any) => {
    try {
      const response = await getTaskListData(page, "");
      console.log(response, "response");
      setPatients((prevData: any) => [...prevData, ...response?.data?.data]);
      if (!response?.data?.next) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
      // setHasMore(false);
    }
  };

  const [loaderRef] = useInfiniteScroll({
    fetchDataFn: fetchData,
    hasMoreData: hasMore,
  });

  return (
    <>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="bg-[#F4F3F3] rounded-lg py-6 px-4 md:w-3/4">
          <BreadCrumb title="Task List" />
          <div className="grid md:grid-cols-8 gap-2 xxs:pr-8 mt-4">
            {/* {workOrderdropdwonData?.map((item, index) => (
            <Dropdown title={item.title} options={item?.options} />
          ))} */}
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="flex bg-gray-100 mt-6 gap-2">
            {/* Sidebar */}
            <div className="w-1/4 p-4 bg-white rounded-lg">
              <h2 className="text-xl font-bold mb-4">Filter</h2>
              <div className="space-y-2">
                {filter?.map((item: any, index: number) => (
                  <button
                    onClick={() => handleFilterClick(item?.payload)}
                    className={`w-full text-left text-sm py-2 px-4 rounded border border-teal ${
                      selectedFilter === item?.payload
                        ? "bg-teal text-white font-bold"
                        : "bg-[#F2FAFF]"
                    }`}
                  >
                    {item?.name}
                  </button>
                ))}
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

                <div className=" px-2 py-2 overflow-y-auto h-[350px]">
                  {/* Patient Row */}
                  {patients?.map((taskData: any, index: number) => {
                    return taskData?.tasklist?.map(
                      (innerTask: any, index: number) => {
                        return (
                          <div
                            onClick={() => handleTaskClick(taskData, innerTask)}
                            className={`${
                              innerTask?.taskId === taskId
                                ? "border-2 shadow-sm shadow-teal border-teal"
                                : "border"
                            } relative flex items-center p-2  rounded mt-2 cursor-pointer`}
                          >
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
                                <p className="text-xs text-[#868686]">
                                  {innerTask?.workType}
                                </p>
                              </div>
                            </div>
                            <div className="flex pl-8 flex-row items-center">
                              <div className="flex-1 text-center">
                                <Link
                                  target="blank"
                                  href={taskData?.prescription_pdf?.[0]}
                                  className="text-teal-600 inline-block"
                                >
                                  <Image src={ViewIcon} alt="view-icon" />
                                </Link>
                                <button
                                  onClick={() =>
                                    downloadPDFFile(
                                      taskData?.prescription_pdf?.[0]
                                    )
                                  }
                                  className="text-teal-600 ml-4 inline-block"
                                >
                                  <Image src={DownloadIcon} alt="icon" />
                                </button>
                              </div>
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
                              {/* {innerTask?.profilePicture?.length > 0 ? (
                                <img
                                  src={`http://192.168.15.49:5000/uploads/logistic/${innerTask?.profilePicture}`}
                                  width={50}
                                  height={50}
                                />
                              ) : (
                                <Image
                                  src={DefaultImg}
                                  alt="default-img"
                                  width={50}
                                />
                              )} */}

                              <CustomImage
                                src={innerTask?.profilePicture}
                                alt="profile-picture"
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
                {hasMore && <div ref={loaderRef}>Loading more...</div>}
                </div>
                
                {/* <div className="flex justify-end items-center gap-4 py-4 px-4 bg-slate-200">
                  <div
                    className={`rounded-full py-2 px-2 cursor-pointer ${
                      patients?.previous ? "bg-teal" : "bg-gray"
                    }`}
                    onClick={handlePrev}
                  >
                    <ChevronLeft />
                  </div>
                  <div
                    className={`${
                      patients?.next ? "bg-teal" : "bg-gray"
                    } cursor-pointer rounded-full py-2 px-2`}
                    onClick={handleNext}
                  >
                    <ChevronRight />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <TaskSidebar taskdata={taskdata} />
      </div>
    </>
  );
}

export default TaskList;
