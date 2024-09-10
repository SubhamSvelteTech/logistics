"use client";
import Modal from "@/app/components/Modal";
import Image from "next/image";
import React from "react";
import BookingDoneIcon from "@Images/booking-done.svg";
import { closeAllModals } from "@/Redux/Slices/modalSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { resetConfirmedData } from "@/Redux/Slices/confirmModalDataSlice";

const BookingDoneModal = ({
  title,
  path,
}: {
  title: string;
  path?: string;
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleRedirect = () => {
    dispatch(closeAllModals());
    dispatch(resetConfirmedData());
    router.push(`${path}`);
  };

  return (
    <Modal id="booking-done">
      <div className="flex justify-center">
        <span className="font-bold">{title}</span>
      </div>
      <div className="flex justify-center mt-6">
        <Image src={BookingDoneIcon} alt="done-icon" width={80} />
      </div>
      <div className="flex justify-end px-4 mt-6">
        <button
          onClick={handleRedirect}
          className="text-sm px-6 py-1 text-white bg-black rounded"
        >
          Done
        </button>
      </div>
    </Modal>
  );
};

export default BookingDoneModal;
