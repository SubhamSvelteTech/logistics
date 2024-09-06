"use client"
import { useState } from "react";
import ChevronRight from "../icons/ChevronRight";
import ChevronLeft from "../icons/ChevronLeft";

const Pagination = ({ paginateData,setPaginateData, apiFunction }: any) => {
  const [page, setPage] = useState<any>(0);
  const handleNext = async () => {
    if (paginateData?.next) {
      const res = await apiFunction(page);
      if (res?.status === 200) {
        if (res?.data?.next) {
          setPage((prev: any) => prev + 1);
        }
        setPaginateData(res?.data);
      }
    }
  };

  const handlePrev = async () => {
    if (paginateData?.previous) {
      const res = await apiFunction(0);
      setPaginateData(res?.data);
    }
  };

  return (
    <>
      <div className="flex justify-end items-center gap-4 py-4 px-4 bg-slate-200">
        <div
          className={`rounded-full py-2 px-2 cursor-pointer ${
            paginateData?.previous ? "bg-teal" : "bg-gray"
          }`}
          onClick={handlePrev}
        >
          <ChevronLeft />
        </div>
        <div
          className={`${
            paginateData?.next ? "bg-teal" : "bg-gray"
          } cursor-pointer rounded-full py-2 px-2`}
          onClick={handleNext}
        >
          <ChevronRight />
        </div>
      </div>
    </>
  );
};

export default Pagination;
