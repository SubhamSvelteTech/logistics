"use client";
import { useState } from "react";
import ChevronRight from "../icons/ChevronRight";
import ChevronLeft from "../icons/ChevronLeft";

const Pagination = ({ paginateData, setPaginateData, apiFunction }: any) => {
  const [page, setPage] = useState<number>(0);

  console.log(paginateData, "paginateData");
  const handleNext = async () => {
    if (paginateData?.next) {
      const nextPage = page + 1;
      const res = await apiFunction(nextPage, "");
      if (res?.status === 200) {
        setPaginateData(res.data);
        setPage(nextPage);
      }
    }
  };

  const handlePrev = async () => {
    if (paginateData?.previous) {
      const prevPage = page - 1;
      const res = await apiFunction(prevPage, "");
      if (res?.status === 200) {
        setPaginateData(res.data);
        setPage(prevPage);
      }
    }
  };

  return (
    <div className="flex justify-end items-center gap-4 py-4 px-4 bg-slate-200">
      <div
        className={`rounded-full py-2 px-2 cursor-pointer ${
          paginateData?.previous ? "bg-teal" : "bg-gray"
        }`}
        onClick={handlePrev}
      >
        <ChevronLeft />
      </div>
      <div>
        <span className="text-md">
          Page <span className="font-bold">{page + 1}</span> of {Math.ceil(paginateData?.patientAll / 10) || 0}
        </span>
      </div>
      <div
        className={`rounded-full py-2 px-2 cursor-pointer ${
          paginateData?.next ? "bg-teal" : "bg-gray"
        }`}
        onClick={handleNext}
      >
        <ChevronRight />
      </div>
    </div>
  );
};

export default Pagination;
