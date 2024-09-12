"use client";
import Modal from "@/app/components/Modal";
import Image from "next/image";
import React from "react";
import CalenderIcon from "@Icons/calendar-icon.svg";
import ClockIcon from "@Icons/click-icon.svg";
import { closeModal } from "@/Redux/Slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import DefaultImg from "@Images/workorder/default-profile.png";
import { usePathname } from "next/navigation";
import injectionIcon from "@Icons/injection.svg";
import { CustomImage } from "@/app/components/custom-image/CustomImage";

const ConfirmBooking = ({
  handleSubmit,
  title,
}: {
  handleSubmit: () => void;
  title: string;
}) => {
  const { confirmModalData } = useSelector(
    (state: any) => state?.confirmModalData
  );

  const dispatch = useDispatch();
  const pathanme = usePathname();

  return (
    <Modal id="confirm-booking">
      <div>
        <div className="flex justify-center">
          <span className="text-lg font-bold">Confirm {title}</span>
        </div>
        <hr className="mt-4" />

        {pathanme !== "/inventory" && (
          <>
            <div className="flex items-center justify-between text-sm px-4 py-4">
              <div className="flex items-center gap-2">
                <Image src={CalenderIcon} alt="cal-icon" width={40} />
                <div>
                  <p>On {confirmModalData?.date}</p>
                  <p
                    onClick={() =>
                      dispatch(closeModal({ id: "confirm-booking" }))
                    }
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
          </>
        )}

        <div className="px-4 py-4 flex items-center gap-4">
        <CustomImage
            src={confirmModalData?.patientImage}
            alt="medicine-image"
          />
          <div>
            <p className="text-sm font-bold py-1">
              {confirmModalData?.fullName}
            </p>
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
        <CustomImage
            src={confirmModalData?.workerImage}
            alt="medicine-image"
          />

          <div>
            <p className="text-sm font-bold py-1"></p>
            <p className="text-sm font-bold">{confirmModalData?.workerName}</p>
            <p className="text-xs font-bold">
              {confirmModalData?.workerCity || "N/A"},{" "}
              {confirmModalData?.workerCountry}
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
