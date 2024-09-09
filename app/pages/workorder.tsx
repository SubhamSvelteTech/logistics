"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import WorkOrderCard from "../(dashboard)/work-order/WorkOrderComp/WorkOrderCard";
import Image from "next/image";
import { getPatientList } from "../common/HelperFunctions";
import DefaultImg from "@Images/workorder/default-profile.png";
import Loader from "../components/loader/Loader";
import SearchBar from "../components/searchbar/SearchBar";

const WorkOrder = () => {
  const [patients, setPatients] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<any>();

  // Function to fetch user details
  const getUserDetails = async () => {
    if (!hasMore || isLoading) return;

    setIsLoading(true);
    const res = await getPatientList(page,"");

    if (res?.status === 200) {
      const newPatients = res?.data?.data;
      const nextPageAvailable = !!res?.data?.next;

      setPatients((prevPatients: any) => [...prevPatients, ...newPatients]);
      setHasMore(nextPageAvailable);

      if (nextPageAvailable) {
        setPage((prevPage) => prevPage + 1);
      }
    }

    setIsLoading(false);
  };

  const lastPatientElementRef = useCallback(
    (node: any) => {
      if (isLoading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          getUserDetails();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [isLoading, hasMore]
  );

  useEffect(() => {
    getUserDetails();
  }, []);

  const handleSearch = async (query: string) => {
    if(query.length > 0){
      const res = await getPatientList(0, query,);
      if (res?.status === 200) {
        setPatients(res?.data?.data);
      }
    }
  };

  return (
    <>
      {isLoading && patients.length === 0 ? (
        <Loader />
      ) : (
        <div className="bg-white rounded-lg py-6 px-8 over">
          <BreadCrumb title="Work Order" />
          <div className="mt-4">
          <SearchBar onSearch={handleSearch} />
          </div>
          {patients?.map((item: any, index: number) => (
            <div
              ref={patients.length === index + 1 ? lastPatientElementRef : null}
              className="flex border rounded-lg flex-nowrap mb-4 overflow-x-auto mt-4"
              key={`workorder-${index}`}
            >
              <div className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0">
                <div className="rounded-lg p-4">
                  <div className="mb-4">
                    <div className="flex gap-4 items-center">
                      <div>
                        {item?.profilePicture?.length > 0 ? (
                          <img
                            src={`http://192.168.15.49:5000/uploads/logistic/${item?.profilePicture}`}
                            width={50}
                            height={50}
                          />
                        ) : (
                          <Image
                            src={DefaultImg}
                            alt="default-img"
                            width={70}
                          />
                        )}
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
        </div>
      )}
      {/* <PrescriptionModal /> */}
    </>
  );
};

export default WorkOrder;
