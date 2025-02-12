import React from "react";
import Image from "next/image";
import DefaultImg from "@Images/workorder/default-profile.png";
import ClockIcon from "@Icons/clock-icon.svg";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addWorkOrderTask } from "@/Redux/Slices/selectedWorkOrderSlice";
import { setCookie } from "cookies-next";
import DeliverIcon from "@Icons/deliver-icon.svg";
import DeliveredIcon from "@/app/components/icons/DeliveredIcon";
import { CustomImage } from "@/app/components/custom-image/CustomImage";
import CallIcon from "@Icons/call-icon.svg"


const WorkOrderCard = ({ data, image, status, assigned, item }: any) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAssign = (id: string) => {
    dispatch(addWorkOrderTask(item));
    setCookie("taskId", id);
    router.push(`/work-order/configuration-panel/${item?._id}`);
  };
  return (
    <div className="w-full py-4 px-2">
      <div className="relative rounded-lg shadowBox bg-white">
        {/* {assigned === "CLOSED" && (
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center rounded-lg">
            <span className="text-black text-md font-bold">DELIVERED</span>
          </div>
        )} */}
        <div className={`relative p-2 ${assigned === "CLOSED" ? "" : ""}`}>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-[12px] font-semibold">{data?.workType}</h3>
            </div>
            <div
              className={`absolute right-0 top-0 px-4 rounded-tr rounded-bl ${
                status === "pending" && "p-1"
              } ${
                assigned === "BOOKED"
                  ? "bg-teal"
                  : assigned === "OPEN"
                  ? "bg-[#DBDBDB]"
                  : assigned === "CLOSED"
                  ? "bg-[#72BE27]"
                  : ""
              }`}
            >
              <span className={`text-xs text-white`}>
                {assigned === "BOOKED" ? (
                  "✔"
                ) : assigned === "OPEN" ? (
                  <Image src={ClockIcon} alt="" />
                ) : (
                  <DeliveredIcon />
                )}
              </span>
            </div>
          </div>
          <div className="flex items-center mb-4 gap-4">
            <CustomImage src={image} alt="profile-picture" />

            {/* start rating */}
            <div>
              <p className="text-gray-900 font-semibold text-[12px]">
                {data?.fullName}
              </p>
              {assigned !== "OPEN" && (
                <>
                  <p className="text-[10px]">
                    <span className="text-teal font-semibold">
                      Assigned At -
                    </span>
                    {data?.assignedDate?.split("T")[0]}
                  </p>
                  {assigned === "CLOSED" && (
                    <p className="text-[10px]">
                      <span className="text-teal font-semibold">
                        Closed At -
                      </span>
                      {data?.updatedAt?.split("T")[0]}
                    </p>
                  )}
                </>
              )}
              {/* <p className="text-gray-600 text-[12px]">{data?.role}</p>
              {assigned === "BOOKED" && (
                <div className="flex">
                  {[...Array(5)].map((star, index) => (
                    <svg
                      key={index}
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.618 4.97a1 1 0 00.95.69h5.244c.969 0 1.371 1.24.588 1.81l-4.243 3.087a1 1 0 00-.364 1.118l1.618 4.97c.3.921-.755 1.688-1.54 1.118l-4.243-3.087a1 1 0 00-1.175 0l-4.243 3.087c-.785.57-1.84-.197-1.54-1.118l1.618-4.97a1 1 0 00-.364-1.118L2.295 10.4c-.783-.57-.38-1.81.588-1.81h5.244a1 1 0 00.95-.69l1.618-4.97z" />
                    </svg>
                  ))}
                </div>
              )} */}
            </div>
          </div>
          <div className="flex items-center justify-end gap-2">
          {assigned === "BOOKED" && (
              <>
                <button
                  className="bg-teal h-[22px] w-[22px] rounded-full flex justify-center items-center"
                  // onClick={() => sendCallNotification(workOrder?._id)}
                >
                  <Image src={CallIcon} alt="" className="w-[10px]" />
                </button>
              </>
            )}
            <button
              onClick={() => handleAssign(data?.taskId)}
              disabled={assigned === "BOOKED" || assigned === "CLOSED"}
              className={`${
                assigned === "BOOKED"
                  ? "bg-teal cursor-not-allowed"
                  : assigned === "CLOSED"
                  ? "bg-[#72BE27]"
                  : "bg-black"
              } hover:bg-teal-700 text-[10px] text-white font-semibold py-2 px-4 rounded`}
            >
              {assigned === "BOOKED"
                ? "ASSIGNED"
                : assigned === "CLOSED"
                ? data?.workType === "BLOOD TEST"
                  ? "COMPLETED"
                  : "DELIVERED"
                : "ASSIGN"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOrderCard;
