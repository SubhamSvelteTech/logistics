"use client"
import React, { useState } from "react";

const Filters = () => {
    const [activeDate, setActiveDate] = useState("30");
  return (
    <div className="flex xs:flex-col gap-2 tablet:flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3 text-xs gap-2">
        <div className="bg-[#0E8080] rounded-lg p-2 text-white font-bold">
          Vendor
        </div>
        <div className="bg-[#0E8080] rounded-lg p-2 text-white font-bold">
          Categories
        </div>
        <div className="bg-[#0E8080] rounded-lg p-2 text-white font-bold">
          Filters
        </div>
      </div>

      <div className="flex divide-x items-center px-1 bg-[#0E8080] tablet:justify-center rounded-lg text-xs text-white">
        <div className="flex items-center gap-3 xs:text-[0.5rem] xs:mr-2 xs:gap-2 p-1  mr-4 ">
          <div
            className={`cursor-pointer ${
              activeDate == "1" &&
              "bg-white text-black rounded-md font-bold p-[3px]"
            }`}
            onClick={(event) => {
              event.preventDefault();
            //   DashboardApi("1");
            }}
          >
            1D
          </div>
          <div
            className={`cursor-pointer ${
              activeDate == "7" &&
              "bg-white text-black rounded-md font-bold p-[3px]"
            }`}
            onClick={(event) => {
              event.preventDefault();
            //   DashboardApi("7");
            }}
          >
            7D
          </div>
          <div
            className={`cursor-pointer ${
              activeDate == "14" &&
              "bg-white text-black rounded-md font-bold p-[3px]"
            }`}
            onClick={(event) => {
              event.preventDefault();
            //   DashboardApi("14");
            }}
          >
            14D
          </div>
          <div
            className={`cursor-pointer ${
              activeDate == "30" &&
              "bg-white text-black rounded-md font-bold p-[3px]"
            }`}
            onClick={(event) => {
              event.preventDefault();
            //   DashboardApi("30");
            }}
          >
            30D
          </div>
          {/* <div
                onClick={(event) => {
                  event.preventDefault();
                  DashboardApi("default");
                }}
              >
                1Y
              </div> */}
        </div>
        <div className="flex items-center text-xs xs:text-[0.7rem] xs:mr-2 xs:gap-2">
          <div className="flex ml-4 gap-2 items-center ">
            {/* <DateRangeComp
              range={range}
              setRange={setRange}
              rangeFunc={DashboardApi}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
