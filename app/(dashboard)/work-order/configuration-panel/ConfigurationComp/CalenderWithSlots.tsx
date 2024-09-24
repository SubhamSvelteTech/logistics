"use client";
import { useFetchSlots } from "@/services/utils/hooks/useFetchSlots";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { useDispatch } from "react-redux";
import { addAssignTo } from "@/Redux/Slices/assignToSlice";

const CalenderWithSlots = () => {
  const [value, onChange] = useState<any>(new Date());
  const formattedDate = format(value, "yyyy-MM-dd");
  const dispatch = useDispatch();
  const { data: slots, refetch } = useFetchSlots(formattedDate);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const handleSlots = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    time: string,
    id: string
  ) => {
    setSelectedSlot(time);
    const payload = {
      assignedDate: formattedDate,
      startTime: time,
      slotId: id,
      slotBookedId: slots?.data?.[0]?._id,
    };
    dispatch(addAssignTo({ ...payload }));
  };
  return (
    <>
      <div className="lg:w-2/3">
        <div className="flex items-center justify-between gap-4 text-lg">
          <span className="font-bold text-[12px]">Date :- {formattedDate}</span>
          {/* <span className="font-bold text-[12px]">Time :-11:12:00 PM</span> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 shadowBox p-4 mt-2 md:divide-x-2 divide-zinc-300">
          <div className="date_calender">
            <Calendar onChange={onChange} value={value} minDate={new Date()} />
          </div>
          <div className="py-2 px-2">
            <span className="font-semibold text-[10px]">Select Time</span>
            {slots?.data?.[0]?.alotedTime.length > 0 ? (
              <div className="grid grid-cols-2 gap-2 w-full overflow-y-scroll h-[11rem]">
              {slots?.data?.[0]?.alotedTime?.map((item: any, index: number) => (
                item?.slotStatus === "AVAILABLE" &&
                <div key={`slots/${index + 1}`}>
                  <button
                    onClick={(e) => handleSlots(e, item?.startTime, item?._id)}
                    className={`shadow-md text-[12px] w-full px-2 mt-2 py-1 rounded ${
                      selectedSlot === item?.startTime
                        ? 'bg-teal text-white font-bold'
                        : ''
                    }`}
                  >
                    {item?.startTime}
                  </button>
                </div>
              ))}
            </div>
            ) : (
              <div className="text-center text-sm h-[11rem]">
                No Slots Availabel
              </div>
            )}
            <div className="flex text-center justify-center mt-2">
              {/* <span className="text-[#515151] text-center text-[8px]">
                Confirm appointment for Monday 8th May at 8 am?
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalenderWithSlots;
