import Image from "next/image";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import injectionIcon from "@Icons/injection.svg";
import Dropdown from "@/app/components/dropdown/Dropdown";
import { openModal } from "@/Redux/Slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { FormField } from "@/Interfaces/Utils/Inventory";
import defaultProfile from "@Images/workorder/default-profile.png";
import InnerRow from "./InnerRow";
import { CustomImage } from "@/app/components/custom-image/CustomImage";

const TableRow = ({
  item,
  handleAccordionToggle,
  hideBtn,
  selectedRow,
}: any) => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  const isValidPath = pathname === "/inventory" ? true : false;

  const formFields: any = [
    { id: 1, ques: "", title: "Sort By:", options: ["A-Z", "Z-A"] },
  ];

  return (
    <>
      <tr
        className="bg-white border border-[#DDDDDD] rounded-md cursor-pointer"
        key={item?._id}
        onClick={() => handleAccordionToggle(item?._id)}
      >
        {/* <td className="px-6 py-4">
          <input
            type="checkbox"
            name="select inventory"
            className="cursor-pointer"
          />
        </td> */}
        <td className="px-6 py-4">
          {isValidPath ? item?.item : item?.fullName}
        </td>
        <td className="px-6 py-4">
          {isValidPath ? item?.itemNumber : item?.mobile}
        </td>
        <td className="px-6 py-4">
          {/* {isValidPath ? (item?.location ? item?.location : "N/A") : item?.city   } */}
          {isValidPath
            ? item?.location
              ? item?.location?.charAt(0).toUpperCase() +
                item?.location?.slice(1)
              : "N/A"
            : item?.city?.charAt(0).toUpperCase() + item?.city?.slice(1)}
        </td>

        <td className="px-6 py-4">
          {isValidPath
            ? item?.quantityOnHand
            : item?.sumOfTotalAssignedQuantity}
        </td>

        <td className="px-6 py-4">
          <div className="inline-block bg-[#C4C4C4] p-2">
            {item?.image ? (
              <Image
                width={20}
                height={20}
                src={injectionIcon}
                alt="injection-icon"
              />
            ) : (
              <CustomImage src={item?.profilePicture} alt="medicine-image" />
            )}
          </div>
        </td>
      </tr>

      {selectedRow?.isOpen &&
        selectedRow?.id === item?._id &&
        pathname === "/inventory" && (
          <tr className="bg-white border border-[#DDDDDD]">
            <td colSpan={6} className="px-6 py-5">
              <div className="bg-gray-100 dark:bg-gray-700 flex items-start flex-col  xl:flex-row xl:items-stretch">
                {/* <div className="w-full basis-6/12 xl:border-r-2 xl:border-[#0E8080]">
                  <div className="flex items-start justify-between">
                    <div className="basis-4/12">
                      <div className="inline-block p-10 bg-[#C4C4C4] border-2 border-[#0E8080]">
                        <Image
                          width={20}
                          src={injectionIcon}
                          alt="injection icon"
                          className="w-[5.3rem]"
                        />
                      </div>
                    </div>
                    <div className="basis-8/12 flex flex-col pr-5">
                      <div className="text-[#6F6F6F]">
                        <strong className="pr-3">SKU Allotted</strong> Aug 2023
                      </div>
                      <input
                        type="text"
                        name=""
                        className="border-b-2 border-[#DDDDDD] outline-none pt-2"
                        disabled
                        value="124"
                      />

                      <div className="flex items-center justify-between">
                        <div className="w-2/5 flex items-start flex-col">
                          <div className="text-[#6F6F6F] pt-2">SKU Left</div>
                          <input
                            type="text"
                            name=""
                            value="21"
                            disabled
                            className="w-full border-b-2 border-[#DDDDDD] outline-none pt-2"
                          />
                        </div>

                        <div className="w-2/5 flex items-start flex-col">
                          <div className="text-[#6F6F6F] pt-2">SKU Used</div>
                          <input
                            type="text"
                            name=""
                            value="100"
                            disabled
                            className="w-full border-b-2 border-[#DDDDDD] outline-none pt-2"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="w-2/5 flex items-start flex-col">
                          <div className="text-[#6F6F6F] pt-2">
                            SKU Defective
                          </div>
                          <input
                            type="text"
                            name=""
                            value="3"
                            disabled
                            className="w-full border-b-2 border-[#DDDDDD] outline-none pt-2"
                          />
                        </div>

                        <div className="w-2/5 flex items-start flex-col">
                          <div className="text-[#6F6F6F] pt-2">lorem Ipsum</div>
                          <input
                            type="text"
                            name=""
                            value="0"
                            disabled
                            className="w-full border-b-2 border-[#DDDDDD] outline-none pt-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="w-full basis-12/12 pl-0 xl:pl-7 py-3 xl:py-0  xl:p-3">
                  <div className="flex items-start justify-between">
                    <div className="basis-9/12">
                      <strong>
                        {pathname === "/inventory"
                          ? "Health Care Worker's"
                          : "Medicines"}
                      </strong>
                    </div>
                    {/* <div className="basis-3/12 mr-3">
                      {formFields.map((item: FormField) => (
                        <React.Fragment key={`dropDown${item?.title}`}>
                          <Dropdown
                            title={item.title}
                            options={item?.options}
                          />
                        </React.Fragment>
                      ))}
                    </div> */}
                  </div>

                  <div className="overflow-y-scroll h-[8rem] mt-2 xl:mt-0">
                    {item?.innerRightData?.map((itm: any) => (
                      <React.Fragment key={itm?._id}>
                        <InnerRow
                          item={itm}
                          rowID={item?._id}
                          med_name={item?.item}
                          med_img={item?.image}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
              <button
                className={`float-right bg-[#0E8080] text-white px-10 py-2 text-xs rounded-md mr-3 ${
                  hideBtn() ? "hidden" : "inline-block"
                }`}
                onClick={() => dispatch(openModal({ id: "confirm-booking" }))}
              >
                Send
              </button>
            </td>
          </tr>
        )}

      <tr>
        <td>
          <span className="block h-[0.5rem]"></span>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
