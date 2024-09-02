"use client";
import Modal from "@/app/components/Modal";
import Image from "next/image";
import React from "react";
import CalenderIcon from "@Icons/calendar-icon.svg";
import ClockIcon from "@Icons/click-icon.svg";
import AsthaGill from "@Images/astha-gill.svg";
import { closeModal, openModal } from "@/Redux/Slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "@/services/utils/hooks/useApi";
import { ASSIGN_TO } from "@/app/constants/apiEndpoints";
import DefaultImg from "@Images/workorder/default-profile.png";

const ConfirmBooking = () => {
  const dispatch = useDispatch();
  const { workOrder } = useSelector((state: any) => state.selectedWorkOrder);
  const { assignTo } = useSelector((state: any) => state.assignTo);
  const { assignedUser } = useSelector((state: any) => state.assignedUser);

  const handleSubmit = async () => {
    const res = await axiosInstance.post(ASSIGN_TO, { ...assignTo });
    if (res?.status === 200) {
      dispatch(openModal({ id: "booking-done" }));
      dispatch(closeModal({ id: "confirm-booking" }));
    }

  };
  console.log(assignedUser?.profilePicture,'dfewdsds')
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
              <p>On {assignTo?.assignedDate}</p>
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
            <p>At {assignTo?.startTime}</p>
          </div>
        </div>

        <hr />

        <div className="px-4 py-4 flex items-center gap-4">

          {workOrder?.profilePicture !== null ? (
            <img
              src={`http://192.168.15.49:5000/uploads/logistic/${workOrder?.profilePicture}`}
              width={80}
              height={80}
            />
          ) : (
            <Image src={DefaultImg} alt="default-img" width={80} />
          )}
          <div>
            <p className="text-sm font-bold py-1">{workOrder?.fullName}</p>
            <p className="text-xs font-bold py-1">
              {workOrder?.city}
              <br />
              {workOrder?.country}
            </p>
            <p className="text-sm py-1">{workOrder?.mobileNumber}</p>
          </div>
        </div>

        <hr />

        <div className="px-4 py-4 flex items-center gap-4">
          {assignedUser?.profilePicture === null ? (
            <img
              src={`http://192.168.15.49:5000/uploads/logistic/${assignedUser?.profilePicture}`}
              width={80}
              height={80}
            />
          ) : (
            <Image src={DefaultImg} alt="default-img" width={80} />
          )}
          <div>
            <p className="text-sm font-bold py-1"></p>
            <p className="text-sm font-bold">{assignedUser?.fullName}</p>
            <p className="text-xs font-bold">
              {assignedUser?.address}, {assignedUser?.city}
            </p>
            <p className="text-sm">+91{assignedUser?.mobile}</p>
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
