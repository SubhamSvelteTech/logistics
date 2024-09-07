import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import injectionIcon from "@Icons/injection.svg";
import Dropdown from "@/app/components/dropdown/Dropdown";
import demoImage from "@Images/astha-gill.svg";
import { openModal } from "@/Redux/Slices/modalSlice";
import { useDispatch } from "react-redux";
import { FormField } from "@/Interfaces/Utils/Inventory";
import defaultProfile from "@Images/workorder/default-profile.png";
import ConfirmBooking from "@/modals/ConfirmBooking";
import BookingDoneModal from "@/modals/BookingDoneModal";
import InnerRow from "./InnerRow";

const TableRow = ({
  item,
  handleAccordionToggle,
  selectedRow,
  accordionOpen,
  innerRowData,
  setSelectedItem,
  selectedItem,
}: any) => {
  // const [selectedItem, setSelectedItem] = useState<any>({});

  const pathname = usePathname();
  const dispatch = useDispatch();

  const isValidPath = pathname === "/inventory" ? true : false;
  console.log(item, "itemitem", innerRowData);
  const formFields: any = [
    { id: 1, ques: "", title: "Sort By: A-Z", options: ["1", "2", "3"] },
  ];

  const selectItem = (itm: any) => {
    console.log(itm, "ioio");
    setSelectedItem({ ...itm, med_name: item?.item, med_img: item?.image });
  };

  console.log("selectItem", item);

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
          {isValidPath ? (item?.location ? item?.location : "N/A") : item?.city}
        </td>
        {isValidPath && <td className="px-6 py-4">{item?.totalValue}</td>}
        <td className="px-6 py-4">
          <div className="inline-block bg-[#C4C4C4] p-2">
            <Image
              width={20}
              height={20}
              src={
                // isValidPath
                //   ? process.env.NEXT_PUBLIC_API_URL_FOR_IMG + item?.image
                //   : item?.profilePicture !== "NULL"
                //   ? process.env.NEXT_PUBLIC_API_URL_FOR_IMG +
                //     item?.profilePicture
                //   : injectionIcon

                isValidPath ? injectionIcon : defaultProfile
              }
              alt="injection-icon"
            />
          </div>
        </td>
      </tr>

      {/* ------------- DO NOT REMOVE THESE COMMENTED CODE */}

      {accordionOpen && selectedRow === item?._id && (
        <tr className="bg-white border border-[#DDDDDD]">
          <td colSpan={6} className="px-6 py-5">
            <div className="bg-gray-100 dark:bg-gray-700 flex items-start flex-col  xl:flex-row xl:items-stretch">
              <div className="w-full basis-6/12 xl:border-r-2 xl:border-[#0E8080]">
                <div className="flex items-start justify-between">
                  <div className="basis-4/12">
                    <div className="inline-block p-10 bg-[#C4C4C4] border-2 border-[#0E8080]">
                      <Image
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
                        <div className="text-[#6F6F6F] pt-2">SKU Defective</div>
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
              </div>
              <div className="w-full basis-6/12 pl-0 xl:pl-7 py-3 xl:py-0  xl:p-3">
                <div className="flex items-start justify-between">
                  <div className="basis-9/12">
                    <strong>Lorem Ipsum Lorem Ipsum</strong>
                  </div>
                  <div className="basis-3/12 mr-3">
                    {formFields.map((item: FormField) => (
                      <Dropdown title={item.title} options={item?.options} />
                    ))}
                  </div>
                </div>

                <div className="overflow-y-scroll h-[8rem] mt-2 xl:mt-0">
                  {/* <div className="flex items-center border border-[#DDDDDD] px-3 py-1 mt-3 rounded-md cursor-pointer mr-2">
                    <div className="basis-0/12 pr-3">
                      <input
                        type="checkbox"
                        name="select patient"
                        className="cursor-pointer"
                      />
                    </div>

                    <div className="flex items-center basis-5/12">
                      <Image
                        width={40}
                        src={demoImage}
                        alt="patient image"
                        className="rounded-md"
                      />
                      <div className="pl-2 font-semibold">Sheetal Sharma</div>
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
                          <div className="text-xs underline text-[#FF4B4B]">
                            Deny
                          </div>
                        </>
                      ) : (
                        <input
                          type="number"
                          name="medicine quantity"
                          className="w-full h-[1.5rem] border border-[#0E8080] outline-none rounded-sm pl-1"
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex items-center border border-[#DDDDDD] px-3 py-1 mt-3 rounded-md cursor-pointer mr-2">
                    <div className="basis-0/12 pr-3">
                      <input
                        type="checkbox"
                        name="select patient"
                        className="cursor-pointer"
                      />
                    </div>

                    <div className="flex items-center basis-5/12">
                      <Image
                        width={40}
                        src={demoImage}
                        alt="patient image"
                        className="rounded-md"
                      />
                      <div className="pl-2 font-semibold">Sheetal Sharma</div>
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
                          <div className="text-xs underline text-[#FF4B4B]">
                            Deny
                          </div>
                        </>
                      ) : (
                        <input
                          type="number"
                          name="medicine quantity"
                          className="w-full h-[1.5rem] border border-[#0E8080] outline-none rounded-sm pl-1"
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex items-center border border-[#DDDDDD] px-3 py-1 mt-3 rounded-md cursor-pointer mr-2">
                    <div className="basis-0/12 pr-3">
                      <input
                        type="checkbox"
                        name="select patient"
                        className="cursor-pointer"
                      />
                    </div>

                    <div className="flex items-center basis-5/12">
                      <Image
                        width={40}
                        src={demoImage}
                        alt="patient image"
                        className="rounded-md"
                      />
                      <div className="pl-2 font-semibold">Sheetal Sharma</div>
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
                          <div className="text-xs underline text-[#FF4B4B]">
                            Deny
                          </div>
                        </>
                      ) : (
                        <input
                          type="number"
                          name="medicine quantity"
                          className="w-full h-[1.5rem] border border-[#0E8080] outline-none rounded-sm pl-1"
                        />
                      )}
                    </div>
                  </div> */}

                  {/* {innerRowData?.map((item: any) => (
                    <div
                      className={`flex items-center border  px-3 py-1 mt-3 rounded-md cursor-pointer mr-2 ${
                        selectedItem?._id === item?._id
                          ? "border-[#0E8080]"
                          : "border-[#DDDDDD]"
                      } `}
                      onClick={() => selectItem(item)}
                    >
                      <div className="flex items-center basis-5/12">
                        <Image
                          width={40}
                          height={40}
                          src={
                            item?.profilePicture?.length > 0
                              ? process.env.NEXT_PUBLIC_API_URL_FOR_IMG +
                                item?.profilePicture
                              : defaultProfile
                          }
                          alt="patient image"
                          className="rounded-md"
                        />
                        <div className="pl-2 font-semibold">
                          {item?.fullName}
                        </div>
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
                            <div className="text-xs underline text-[#FF4B4B]">
                              Deny
                            </div>
                          </>
                        ) : (
                          <input
                            type="number"
                            name="medicine quantity"
                            className="w-full h-[1.5rem] border border-[#0E8080] outline-none rounded-sm pl-1"
                          />
                        )}
                      </div>
                    </div>
                  ))} */}

                  {item?.innerRightData?.map((itm: any) => (
                    <InnerRow item={itm} rowID={item?._id} />
                  ))}
                </div>
              </div>
            </div>
            <button
              className="float-right bg-[#0E8080] text-white px-10 py-2 text-xs rounded-md mr-3"
              onClick={() => dispatch(openModal({ id: "confirm-booking" }))}
            >
              Send
            </button>
          </td>
        </tr>
      )}

      <div className="block h-[0.5rem]"></div>
    </>
  );
};

export default TableRow;
