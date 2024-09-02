"use client";
import Modal from "@/app/components/Modal";
import Image from "next/image";
import React from "react";
import BookingDoneIcon from "@Images/booking-done.svg";
import { closeAllModals } from "@/Redux/Slices/modalSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const BookingDoneModal = ({ title }: { title?: string }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <Modal id="booking-done">
      <div className="flex justify-center">
        <span className="font-bold">Booking done successfully!</span>
      </div>
      <div className="flex justify-center mt-6">
        <Image src={BookingDoneIcon} alt="done-icon" width={80} />
      </div>
      <div className="flex justify-end px-4 mt-6">
        <button
          onClick={() => dispatch(closeAllModals())}
          className="text-sm px-6 py-1 text-white bg-black rounded"
        >
          Done
        </button>
      </div>
    </Modal>
  );
};

export default BookingDoneModal;
