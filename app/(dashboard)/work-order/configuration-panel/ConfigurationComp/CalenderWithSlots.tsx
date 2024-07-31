"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const slots = [
  {id:1,time:"8:00 AM"},
  {id:2,time:"8:00 AM"},
  {id:3,time:"8:00 AM"},
  {id:4,time:"8:00 AM"},
  {id:5,time:"8:00 AM"},
  {id:6,time:"8:00 AM"},
  {id:7,time:"8:00 AM"},
  {id:8,time:"8:00 AM"},
  {id:9,time:"8:00 AM"},
  {id:10,time:"8:00 AM"}
]

const CalenderWithSlots = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <>
      <div>
        <div className="flex items-center justify-between gap-4 text-lg">
          <span className="font-bold">Date :- 23/05/2024</span>
          <span className="font-bold">Time :-11:12:00 PM</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 shadowBox p-4 mt-2 md:divide-x-2 divide-zinc-300">
        <div className="date_calender">
          <Calendar onChange={onChange} value={value} />
        </div>
        <div className="py-4 px-6">
          <span className="font-semibold">Select Time</span>
          <div className="grid grid-cols-2 gap-2 w-full overflow-y-scroll h-[11rem]">
            {slots?.map((item,index)=>
            <div>
              <button className="shadow-md w-full px-6 mt-2 py-2 rounded">{item?.time}</button>
            </div>
            )}
          </div>
          <div className="flex text-center mt-4">
            <span className="text-[#515151] text-xs">Confirm appointment for Monday 8th May at 8 am?</span>
          </div>
          <div className="flex text-center justify-center mt-4">
            <button className="font-bold bg-black text-white px-4 py-2 rounded w-full">Schedule</button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default CalenderWithSlots;
