import Image from "next/image";
import defaultProfile from "@Images/workorder/default-profile.png";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { setAssignPartner } from "@/Redux/Slices/inventorySlice";
import { setConfirmModalData } from "@/Redux/Slices/confirmModalDataSlice";

const InnerRow = ({
  item,
  rowID,
  med_name,
  med_img,
}: {
  item: any;
  rowID: string;
  med_name: string;
  med_img: string;
}) => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    if (item?.isChecked) {
      dispatch(
        setConfirmModalData({
          productID: rowID,
          workerID: item?._id,
          workerName: item?.fullName,
          workerMobile: item?.mobile,
          workerCity: item?.city || null,
          workerCountry: item?.country,
          workerImage: item?.profilePicture || null,
          fullName: med_name,
          patientImage: med_img,
          assignedQuantity: item?.assignedQuantity || null,
        })
      );
    }
  }, [item?.isChecked, item?.assignedQuantity]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    dispatch(
      setAssignPartner({
        [name]: value,
        inner_id: item?._id,
        row_id: rowID,
        type: "SET_VALUE",
      })
    );
  };

  const assign = () => {
    dispatch(
      setAssignPartner({
        inner_id: item?._id,
        row_id: rowID,
        isChecked: true,
        type: "SET_ISCHECKED",
      })
    );
  };

  return (
    <>
      <div
        className={`flex items-center border  px-3 py-1 mt-3 rounded-md cursor-pointer mr-2 ${
          item?.isChecked ? "border-[#0E8080]" : "border-[#DDDDDD]"
        } `}
        onClick={assign}
      >
        {/* <div className="basis-0/12 pr-3">
                        <input
                          type="checkbox"
                          name="select patient"
                          className="cursor-pointer"
                        />
                      </div> */}

        <div className="flex items-center basis-10/12">
          <Image
            width={40}
            height={40}
            src={
              item?.profilePicture?.length > 0
                ? process.env.NEXT_PUBLIC_API_URL_FOR_IMG + item?.profilePicture
                : defaultProfile
            }
            alt="patient image"
            className="rounded-md"
          />
          <div className="pl-2 font-semibold">{item?.fullName}</div>
        </div>

        {/* <div className="basis-5/12 text-[#A0A0A0]">
          order placed 23,Aug 2023
        </div> */}

        <div className="basis-2/12">
          {pathname === "/health-care" ? (
            <>
              <div className="text-xs pr-2 underline text-[#10800E]">
                Approve
              </div>
              <div className="text-xs underline text-[#FF4B4B]">Deny</div>
            </>
          ) : (
            <input
              type="number"
              name="assignedQuantity"
              onChange={handleChange}
              value={item?.assignedQuantity ?? 0}
              disabled={!item?.isChecked}
              className="w-full h-[1.5rem] border border-[#0E8080] outline-none rounded-sm pl-1 disabled:bg-[#C4C4C4] disabled:border-0"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default InnerRow;
