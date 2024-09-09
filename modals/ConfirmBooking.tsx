"use client";
import Modal from "@/app/components/Modal";
import Image from "next/image";
import React from "react";
import CalenderIcon from "@Icons/calendar-icon.svg";
import ClockIcon from "@Icons/click-icon.svg";
import { closeModal } from "@/Redux/Slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import DefaultImg from "@Images/workorder/default-profile.png";

const ConfirmBooking = ({handleSubmit}:any) => {
  const dispatch = useDispatch();
  const {confirmModalData} = useSelector((state:any)=>state?.confirmModalData)
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
              <p>On {confirmModalData?.date}</p>
              <p
                onClick={() => dispatch(closeModal({ id: "confirm-booking" }))}
                className="text-teal font-bold cursor-pointer hover:underline"
              >
                Change Date and Time
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Image src={ClockIcon} alt="" width={30} />
            <p>At {confirmModalData?.time}</p>
          </div>
        </div>

        <hr />

        <div className="px-4 py-4 flex items-center gap-4">

          {confirmModalData?.patientImage !== null ? (
            <img
              src={`http://192.168.15.49:5000/uploads/logistic/${confirmModalData?.patientImage}`}
              width={80}
              height={80}
            />
          ) : (
            <Image src={DefaultImg} alt="default-img" width={80} />
          )}
          <div>
            <p className="text-sm font-bold py-1">{confirmModalData?.fullName}</p>
            <p className="text-xs font-bold py-1">
              {confirmModalData?.city}
              <br />
              {confirmModalData?.country}
            </p>
            <p className="text-sm py-1">{confirmModalData?.mobile}</p>
          </div>
        </div>

        <hr />

        <div className="px-4 py-4 flex items-center gap-4">
          {confirmModalData?.workerImage === null ? (
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL_FOR_IMG}/uploads/logistic/${confirmModalData?.workerImage}`}
              width={80}
              height={80}
            />
          ) : (
            <Image src={DefaultImg} alt="default-img" width={80} />
          )}
          <div>
            <p className="text-sm font-bold py-1"></p>
            <p className="text-sm font-bold">{confirmModalData?.workerName}</p>
            <p className="text-xs font-bold">
              {confirmModalData?.workerCity}, {confirmModalData?.workerCountry}
            </p>
            <p className="text-sm">+91{confirmModalData?.workerMobile}</p>
          </div>
        </div>

        <div className="flex justify-end gap-4 px-4 mt-4">
          <button
            onClick={() => dispatch(closeModal({ id: "confirm-booking" }))}
            className="bg-[#7C7C7C] text-white px-8 py-2 rounded text-sm font-bold"
          >
            CANCEL
          </button>
          <button
            onClick={handleSubmit}
            className="bg-black text-white px-8 py-2 rounded text-sm font-bold"
          >
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmBooking;
