import Image from "next/image";
import defaultProfile from "@Images/workorder/default-profile.png";
import React from "react";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { setAssignPartner } from "@/Redux/Slices/inventorySlice";

const InnerRow = ({
  item,
  selectedItem,
  selectItem,
  setSelectedItem,
  rowID,
}: {
  item: any;
  selectedItem: any;
  selectItem: (item: any) => void;
  setSelectedItem: any;
  rowID: string;
}) => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    dispatch(
      setAssignPartner({
        value,
        inner_id: item?._id,
        row_id: rowID,
        type: "SET_VALUE",
      })
    );
  };

  const assign = () => {
    dispatch(
      setAssignPartner({
        value: null,
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
        // onClick={() => selectItem(item)}
        onClick={assign}
      >
        {/* <div className="basis-0/12 pr-3">
                        <input
                          type="checkbox"
                          name="select patient"
                          className="cursor-pointer"
                        />
                      </div> */}

        <div className="flex items-center basis-5/12">
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

        <div className="basis-5/12 text-[#A0A0A0]">
          order placed 23,Aug 2023
        </div>

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
              name="medicine quantity"
              onChange={handleChange}
              value={item?.value}
              className="w-full h-[1.5rem] border border-[#0E8080] outline-none rounded-sm pl-1"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default InnerRow;
