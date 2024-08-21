"use client"
import Modal from "@/app/components/Modal";
import Image from "next/image";
import React from "react";
import CalenderIcon from "@Icons/calendar-icon.svg";
import ClockIcon from "@Icons/click-icon.svg";
import AsthaGill from "@Images/astha-gill.svg";
import Nurse from "@Images/nurse.svg";
import { openModal } from "@/Redux/Slices/modalSlice";
import { useDispatch } from "react-redux";

const ConfirmBooking = () => {
  const dispatch = useDispatch();
  return (
    <Modal id="confirm-booking">
      <div>
        <div className="flex justify-center">
          <span className="text-lg font-bold">Confirm Booking</span>
        </div>
        <hr className="mt-4" />
        <div className="flex items-center justify-between text-sm px-4 py-4">
          <div className="flex items-center gap-2">
            <Image src={CalenderIcon} alt="cal-icon" width={40} />
            <div>
              <p>On May 28, 2023</p>
              <p className="text-teal font-bold">Change Date and Time</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Image src={ClockIcon} alt="" width={30} />
            <p>At 08:00 AM</p>
          </div>
        </div>

        <hr />

        <div className="px-4 py-4 flex items-center gap-4">
          <Image src={AsthaGill} alt="patient-img" width={90} />
          <div>
            <p className="text-sm font-bold py-1">Astha Gill</p>
            <p className="text-xs font-bold py-1">
              Dlf, 482, near Sham sweets,
              <br />
              Phase III, Jacob Pura
            </p>
            <p className="text-sm py-1">+91 4008 800 232</p>
          </div>
        </div>

        <hr />

        <div className="px-4 py-4 flex items-center gap-4">
          <Image src={Nurse} alt="patient-img" width={90} />
          <div>
            <p className="text-sm font-bold py-1">Nurse</p>
            <p className="text-sm font-bold">Mary Seacole</p>
            <p className="text-xs font-bold">Gurugram, sector 43</p>
            <p className="text-sm">+91 4008 800 232</p>
          </div>
        </div>

        <div className="flex justify-end gap-4 px-4 mt-4">
          <button className="bg-[#7C7C7C] text-white px-8 py-2 rounded text-sm font-bold">
            CANCEL
          </button>
          <button onClick={() => dispatch(openModal({ id: "booking-done" }))} className="bg-black text-white px-8 py-2 rounded text-sm font-bold">
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmBooking;
