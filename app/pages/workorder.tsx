"use client";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import WorkOrderCard from "../(dashboard)/work-order/WorkOrderComp/WorkOrderCard";
import { getPatientList } from "../common/HelperFunctions";
import Loader from "../components/loader/Loader";
import SearchBar from "../components/searchbar/SearchBar";
import { CustomImage } from "../components/custom-image/CustomImage";
import { NEWPATIENT_EVENT } from "../constants/apiEndpoints";
import Toaster from "@/services/utils/toaster/Toaster";
import Pagination from "../components/pagination/Pagination";

const WorkOrder = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [paginateData, setPaginateData] = useState<any>();

  const handleSearch = async (query: string) => {
    const res = await getPatientList(0, query);
    if (res?.status === 200) {
      setPaginateData(res?.data);
    }
  };

  const fetchData = async (page: any) => {
    setIsLoading(true); // Start loading state
    try {
      const response = await getPatientList(page, "");
      if (response?.status === 200) {
        setPaginateData(response.data);
      } else {
        console.error("API error:", response);
        // Handle non-200 responses if necessary
      }
    } catch (error) {
      console.error("Network error:", error);
      // Optionally set an error state here or show a message to the user
    } finally {
      setIsLoading(false); // Ensure loading state is reset
    }
  };

  useEffect(() => {
    fetchData(0);
    const eventSource = new EventSource(
      `${process.env.NEXT_PUBLIC_API_URL + NEWPATIENT_EVENT}`
    );

    // Handle NEWPATIENT event
    eventSource.addEventListener("NEWPATIENT", (event: MessageEvent) => {
      const newEvent = JSON.parse(event.data);
      // setPatients((prevEvents: any) => [newEvent?.data, ...prevEvents]);
      fetchData(0);
      Toaster(
        "success",
        `New Patient with name ${newEvent?.data?.fullName} Added!`
      );
    });

    // Handle NEWPATIENTTASK event
    eventSource.addEventListener("NEWPATIENTTASK", (event: MessageEvent) => {
      const newEvent = JSON.parse(event.data);
      // setPatients((prevEvents: any) => [newEvent?.data, ...prevEvents]);
      fetchData(0);
      Toaster(
        "success",
        `New Task for ${newEvent?.data?.patientname} Updated!`
      );
    });

    // Handle CLOSEDASSIGNEDTASK event
    eventSource.addEventListener(
      "CLOSEDASSIGNEDTASK",
      (event: MessageEvent) => {
        const closedEvent = JSON.parse(event.data);
        fetchData(0);
        Toaster(
          "success",
          `Task for patient ${closedEvent?.data?.patientId?.fullName} has been closed.`
        );
      }
    );

    // Error handling for SSE connection
    eventSource.onerror = () => {
      console.error("SSE connection error");
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-white rounded-lg py-6 px-8 over">
          <BreadCrumb title="Work Order" />
          <div className="mt-4">
            <SearchBar onSearch={handleSearch} />
          </div>
          {paginateData?.data?.map((item: any, index: number) => (
            <div
              // ref={patients.length === index + 1 ? lastPatientElementRef : null}
              className="flex border rounded-lg flex-nowrap mb-4 overflow-x-auto mt-4"
              key={`workorder-${index}`}
            >
              <div className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0">
                <div className="rounded-lg p-4">
                  <div className="mb-4">
                    <div className="flex gap-4 items-center">
                      <div>
                        <CustomImage
                          src={item?.profilePicture}
                          alt="profile-picture"
                        />
                      </div>
                      <div>
                        <p className="text-gray-900 text-xs font-semibold mt-6">
                          {item?.fullName}
                        </p>
                        <p className="text-gray-600 text-xs">
                          {item?.city} {item?.city && ","}
                          {item?.country}
                        </p>
                        <p className="text-teal font-bold text-xs">
                          {item?.prescriptionType}
                        </p>
                        <div className="flex justify-center">
                          <a
                            target="_blank"
                            href={`${
                              item?.prescription_pdf?.length > 0 &&
                              item?.prescription_pdf?.[0]
                            }`}
                            className="bg-teal text-white text-[10px] py-2 px-2 font-semibold rounded mt-2"
                          >
                            View Prescription
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {item?.tasklist?.map((order: any, i: number) => (
                <div key={i} className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0">
                  <WorkOrderCard
                    data={order}
                    item={item}
                    image={order?.profilePicture}
                    status="pending"
                    assigned={order?.taskStatus}
                  />
                </div>
              ))}
            </div>
          ))}
          <Pagination
            paginateData={paginateData}
            setPaginateData={setPaginateData}
            apiFunction={getPatientList}
          />
        </div>
      )}
      {/* <PrescriptionModal /> */}
      {/* {hasMore && <div ref={loaderRef}>Loading more...</div>} */}
    </>
  );
};

export default WorkOrder;
