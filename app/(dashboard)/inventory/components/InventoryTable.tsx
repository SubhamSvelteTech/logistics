"use client";
import Dropdown from "@/app/components/dropdown/Dropdown";
import { FormField } from "@/Interfaces/Utils/Inventory";
import injectionIcon from "@Icons/injection.svg";
import Image from "next/image";
import demoImage from "@Images/astha-gill.svg";
import React, { useState } from "react";
import { openModal } from "@/Redux/Slices/modalSlice";
import { useDispatch } from "react-redux";
import ConfirmBooking from "@/modals/ConfirmBooking";
import BookingDoneModal from "@/modals/BookingDoneModal";
import { usePathname } from "next/navigation";

const InventoryTable = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const dispatch = useDispatch();
  const pathname = usePathname();

  const formFields: any = [
    { id: 1, ques: "", title: "Sort By: A-Z", options: ["1", "2", "3"] },
  ];

  const handleAccordionToggle = (rowIndex:any) => {
    if (selectedRow === rowIndex) {
      setAccordionOpen(!accordionOpen);
    } else {
      setAccordionOpen(true);
      setSelectedRow(rowIndex);
    }
  };

  return (
    <div className="relative overflow-x-auto bg-white px-8 py-6 rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-[#0E808033] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              <input
                type="checkbox"
                name="Select All Inventory"
                className="cursor-pointer"
              />
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              ID Number
            </th>
            <th scope="col" className="px-6 py-3">
              Location
            </th>
            <th scope="col" className="px-6 py-3">
              Total Allotted Assets
            </th>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            className="bg-white border border-[#DDDDDD] rounded-md cursor-pointer"
            onClick={() => handleAccordionToggle(0)}
          >
            <td className="px-6 py-4">
              <input
                type="checkbox"
                name="select inventory"
                className="cursor-pointer"
              />
            </td>
            <td className="px-6 py-4">Injectables_1</td>
            <td className="px-6 py-4">8957421</td>
            <td className="px-6 py-4">124</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">
              <span className="inline-block bg-[#C4C4C4] p-2">
                <Image width={20} src={injectionIcon} alt="injection icon" />
              </span>
            </td>
          </tr>

          {accordionOpen && selectedRow === 0 && (
            <tr className="bg-white border border-[#DDDDDD]">
              <td colSpan={6} className="px-6 py-5">
                <div className="bg-gray-100 dark:bg-gray-700 flex items-start flex-col  xl:flex-row xl:items-stretch">
                  <div className="w-full basis-6/12 xl:border-r-2 xl:border-[#0E8080]">
                    <div className="flex items-start justify-between">
                      <div className="basis-4/12">
                        <span className="inline-block p-10 bg-[#C4C4C4] border-2 border-[#0E8080]">
                          <Image
                            src={injectionIcon}
                            alt="injection icon"
                            className="w-[5.3rem]"
                          />
                        </span>
                      </div>
                      <div className="basis-8/12 flex flex-col pr-5">
                        <span className="text-[#6F6F6F]">
                          <strong className="pr-3">SKU Allotted</strong> Aug
                          2023
                        </span>
                        <input
                          type="text"
                          name=""
                          className="border-b-2 border-[#DDDDDD] outline-none pt-2"
                        />

                        <div className="flex items-center justify-between">
                          <div className="w-2/5 flex items-start flex-col">
                            <span className="text-[#6F6F6F] pt-2">
                              SKU Left
                            </span>
                            <input
                              type="text"
                              name=""
                              className="w-full border-b-2 border-[#DDDDDD] outline-none pt-2"
                            />
                          </div>

                          <div className="w-2/5 flex items-start flex-col">
                            <span className="text-[#6F6F6F] pt-2">
                              SKU Used
                            </span>
                            <input
                              type="text"
                              name=""
                              className="w-full border-b-2 border-[#DDDDDD] outline-none pt-2"
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="w-2/5 flex items-start flex-col">
                            <span className="text-[#6F6F6F] pt-2">
                              SKU Defective
                            </span>
                            <input
                              type="text"
                              name=""
                              className="w-full border-b-2 border-[#DDDDDD] outline-none pt-2"
                            />
                          </div>

                          <div className="w-2/5 flex items-start flex-col">
                            <span className="text-[#6F6F6F] pt-2">
                              lorem Ipsum
                            </span>
                            <input
                              type="text"
                              name=""
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
                        {formFields?.map((item: FormField) => (
                          <Dropdown
                            title={item.title}
                            options={item?.options}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="overflow-y-scroll h-[8rem] mt-2 xl:mt-0">
                      <div className="flex items-center border border-[#DDDDDD] px-3 py-1 mt-3 rounded-md cursor-pointer mr-2">
                        <span className="basis-0/12 pr-3">
                          <input
                            type="checkbox"
                            name="select patient"
                            className="cursor-pointer"
                          />
                        </span>

                        <span className="flex items-center basis-5/12">
                          <Image
                            width={40}
                            src={demoImage}
                            alt="patient image"
                            className="rounded-md"
                          />
                          <span className="pl-2 font-semibold">
                            Sheetal Sharma
                          </span>
                        </span>

                        <span className="basis-5/12 text-[#A0A0A0]">
                          order placed 23,Aug 2023
                        </span>

                        <span className="basis-2/12">
                          {pathname === "/health-care" ? (
                            <>
                              <span className="text-xs pr-2 underline text-[#10800E]">
                                Approve
                              </span>
                              <span className="text-xs underline text-[#FF4B4B]">
                                Deny
                              </span>
                            </>
                          ) : (
                            <input
                              type="number"
                              name="medicine quantity"
                              className="w-full h-[1.5rem] border border-[#0E8080] outline-none rounded-sm pl-1"
                            />
                          )}
                        </span>
                      </div>

                      <div className="flex items-center border border-[#DDDDDD] px-3 py-1 mt-3 rounded-md cursor-pointer mr-2">
                        <span className="basis-0/12 pr-3">
                          <input
                            type="checkbox"
                            name="select patient"
                            className="cursor-pointer"
                          />
                        </span>

                        <span className="flex items-center basis-5/12">
                          <Image
                            width={40}
                            src={demoImage}
                            alt="patient image"
                            className="rounded-md"
                          />
                          <span className="pl-2 font-semibold">
                            Sheetal Sharma
                          </span>
                        </span>

                        <span className="basis-5/12 text-[#A0A0A0]">
                          order placed 23,Aug 2023
                        </span>

                        <span className="basis-2/12">
                          {pathname === "/health-care" ? (
                            <>
                              <span className="text-xs pr-2 underline text-[#10800E]">
                                Approve
                              </span>
                              <span className="text-xs underline text-[#FF4B4B]">
                                Deny
                              </span>
                            </>
                          ) : (
                            <input
                              type="number"
                              name="medicine quantity"
                              className="w-full h-[1.5rem] border border-[#0E8080] outline-none rounded-sm pl-1"
                            />
                          )}
                        </span>
                      </div>

                      <div className="flex items-center border border-[#DDDDDD] px-3 py-1 mt-3 rounded-md cursor-pointer mr-2">
                        <span className="basis-0/12 pr-3">
                          <input
                            type="checkbox"
                            name="select patient"
                            className="cursor-pointer"
                          />
                        </span>

                        <span className="flex items-center basis-5/12">
                          <Image
                            width={40}
                            src={demoImage}
                            alt="patient image"
                            className="rounded-md"
                          />
                          <span className="pl-2 font-semibold">
                            Sheetal Sharma
                          </span>
                        </span>

                        <span className="basis-5/12 text-[#A0A0A0]">
                          order placed 23,Aug 2023
                        </span>

                        <span className="basis-2/12">
                          {pathname === "/health-care" ? (
                            <>
                              <span className="text-xs pr-2 underline text-[#10800E]">
                                Approve
                              </span>
                              <span className="text-xs underline text-[#FF4B4B]">
                                Deny
                              </span>
                            </>
                          ) : (
                            <input
                              type="number"
                              name="medicine quantity"
                              className="w-full h-[1.5rem] border border-[#0E8080] outline-none rounded-sm pl-1"
                            />
                          )}
                        </span>
                      </div>
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

          <span className="block h-[0.5rem]"></span>

          <tr
            className="bg-white border border-[#DDDDDD] rounded-md cursor-pointer"
            onClick={() => handleAccordionToggle(1)}
          >
            <td className="px-6 py-4">
              <input
                type="checkbox"
                name="select inventory"
                className="cursor-pointer"
              />
            </td>
            <td className="px-6 py-4">Injectables_1</td>
            <td className="px-6 py-4">8957421</td>
            <td className="px-6 py-4">124</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">
              <span className="inline-block bg-[#C4C4C4] p-2">
                <Image width={20} src={injectionIcon} alt="injection icon" />
              </span>
            </td>
          </tr>

          {accordionOpen && selectedRow === 1 && (
            <tr className="bg-white border border-[#DDDDDD]">
              <td colSpan={6} className="px-6 py-5">
                <div className="bg-gray-100 dark:bg-gray-700 flex items-start flex-col  xl:flex-row xl:items-stretch">
                  <div className="w-full basis-6/12 xl:border-r-2 xl:border-[#0E8080]">
                    <div className="flex items-start justify-between">
                      <div className="basis-4/12">
                        <span className="inline-block p-10 bg-[#C4C4C4] border-2 border-[#0E8080]">
                          <Image
                            src={injectionIcon}
                            alt="injection icon"
                            className="w-[5.3rem]"
                          />
                        </span>
                      </div>
                      <div className="basis-8/12 flex flex-col pr-5">
                        <span className="text-[#6F6F6F]">
                          <strong className="pr-3">SKU Allotted</strong> Aug
                          2023
                        </span>
                        <input
                          type="text"
                          name=""
                          className="border-b-2 border-[#DDDDDD] outline-none pt-2"
                        />

                        <div className="flex items-center justify-between">
                          <div className="w-2/5 flex items-start flex-col">
                            <span className="text-[#6F6F6F] pt-2">
                              SKU Left
                            </span>
                            <input
                              type="text"
                              name=""
                              className="w-full border-b-2 border-[#DDDDDD] outline-none pt-2"
                            />
                          </div>

                          <div className="w-2/5 flex items-start flex-col">
                            <span className="text-[#6F6F6F] pt-2">
                              SKU Used
                            </span>
                            <input
                              type="text"
                              name=""
                              className="w-full border-b-2 border-[#DDDDDD] outline-none pt-2"
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="w-2/5 flex items-start flex-col">
                            <span className="text-[#6F6F6F] pt-2">
                              SKU Defective
                            </span>
                            <input
                              type="text"
                              name=""
                              className="w-full border-b-2 border-[#DDDDDD] outline-none pt-2"
                            />
                          </div>

                          <div className="w-2/5 flex items-start flex-col">
                            <span className="text-[#6F6F6F] pt-2">
                              lorem Ipsum
                            </span>
                            <input
                              type="text"
                              name=""
                              className="w-full border-b-2 border-[#DDDDDD] outline-none pt-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full basis-6/12 pl-0 xl:pl-7 py-3 xl:py-0 xl:p-3">
                    <div className="flex items-start justify-between">
                      <div className="basis-9/12">
                        <strong>Lorem Ipsum Lorem Ipsum</strong>
                      </div>
                      <div className="basis-3/12 mr-3">
                        {formFields?.map((item: FormField) => (
                          <Dropdown
                            title={item.title}
                            options={item?.options}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="overflow-y-scroll h-[8rem] mt-2 xl:mt-0">
                      <div className="flex items-center border border-[#DDDDDD] px-3 py-1 mt-3 rounded-md cursor-pointer mr-2">
                        <span className="basis-0/12 pr-3">
                          <input
                            type="checkbox"
                            name="select patient"
                            className="cursor-pointer"
                          />
                        </span>

                        <span className="flex items-center basis-5/12">
                          <Image
                            width={40}
                            src={demoImage}
                            alt="patient image"
                            className="rounded-md"
                          />
                          <span className="pl-2 font-semibold">
                            Sheetal Sharma
                          </span>
                        </span>

                        <span className="basis-5/12 text-[#A0A0A0]">
                          order placed 23,Aug 2023
                        </span>

                        <span className="basis-2/12">
                          {pathname === "/health-care" ? (
                            <>
                              <span className="text-xs pr-2 underline text-[#10800E]">
                                Approve
                              </span>
                              <span className="text-xs underline text-[#FF4B4B]">
                                Deny
                              </span>
                            </>
                          ) : (
                            <input
                              type="number"
                              name="medicine quantity"
                              className="w-full h-[1.5rem] border border-[#0E8080] outline-none rounded-sm pl-1"
                            />
                          )}
                        </span>
                      </div>

                      <div className="flex items-center border border-[#DDDDDD] px-3 py-1 mt-3 rounded-md cursor-pointer mr-2">
                        <span className="basis-0/12 pr-3">
                          <input
                            type="checkbox"
                            name="select patient"
                            className="cursor-pointer"
                          />
                        </span>

                        <span className="flex items-center basis-5/12">
                          <Image
                            width={40}
                            src={demoImage}
                            alt="patient image"
                            className="rounded-md"
                          />
                          <span className="pl-2 font-semibold">
                            Sheetal Sharma
                          </span>
                        </span>

                        <span className="basis-5/12 text-[#A0A0A0]">
                          order placed 23,Aug 2023
                        </span>

                        <span className="basis-2/12">
                          {pathname === "/health-care" ? (
                            <>
                              <span className="text-xs pr-2 underline text-[#10800E]">
                                Approve
                              </span>
                              <span className="text-xs underline text-[#FF4B4B]">
                                Deny
                              </span>
                            </>
                          ) : (
                            <input
                              type="number"
                              name="medicine quantity"
                              className="w-full h-[1.5rem] border border-[#0E8080] outline-none rounded-sm pl-1"
                            />
                          )}
                        </span>
                      </div>

                      <div className="flex items-center border border-[#DDDDDD] px-3 py-1 mt-3 rounded-md cursor-pointer mr-2">
                        <span className="basis-0/12 pr-3">
                          <input
                            type="checkbox"
                            name="select patient"
                            className="cursor-pointer"
                          />
                        </span>

                        <span className="flex items-center basis-5/12">
                          <Image
                            width={40}
                            src={demoImage}
                            alt="patient image"
                            className="rounded-md"
                          />
                          <span className="pl-2 font-semibold">
                            Sheetal Sharma
                          </span>
                        </span>

                        <span className="basis-5/12 text-[#A0A0A0]">
                          order placed 23,Aug 2023
                        </span>

                        <span className="basis-2/12">
                          {pathname === "/health-care" ? (
                            <>
                              <span className="text-xs pr-2 underline text-[#10800E]">
                                Approve
                              </span>
                              <span className="text-xs underline text-[#FF4B4B]">
                                Deny
                              </span>
                            </>
                          ) : (
                            <input
                              type="number"
                              name="medicine quantity"
                              className="w-full h-[1.5rem] border border-[#0E8080] outline-none rounded-sm pl-1"
                            />
                          )}
                        </span>
                      </div>
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

          <span className="block h-[0.5rem]"></span>

          <tr
            className="bg-white border border-[#DDDDDD] rounded-md cursor-pointer"
            onClick={() => handleAccordionToggle(2)}
          >
            <td className="px-6 py-4">
              <input
                type="checkbox"
                name="select inventory"
                className="cursor-pointer"
              />
            </td>
            <td className="px-6 py-4">Injectables_1</td>
            <td className="px-6 py-4">8957421</td>
            <td className="px-6 py-4">124</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">
              <span className="inline-block bg-[#C4C4C4] p-2">
                <Image width={20} src={injectionIcon} alt="injection icon" />
              </span>
            </td>
          </tr>

          {accordionOpen && selectedRow === 2 && (
            <tr className="bg-white border border-[#DDDDDD]">
              <td colSpan={6} className="px-6 py-5">
                <div className="bg-gray-100 dark:bg-gray-700 flex items-start flex-col  xl:flex-row xl:items-stretch">
                  <div className="w-full basis-6/12 xl:border-r-2 xl:border-[#0E8080]">
                    <div className="flex items-start justify-between">
                      <div className="basis-4/12">
                        <span className="inline-block p-10 bg-[#C4C4C4] border-2 border-[#0E8080]">
                          <Image
                            src={injectionIcon}
                            alt="injection icon"
                            className="w-[5.3rem]"
                          />
                        </span>
                      </div>
                      <div className="basis-8/12 flex flex-col pr-5">
                        <span className="text-[#6F6F6F]">
                          <strong className="pr-3">SKU Allotted</strong> Aug
                          2023
                        </span>
                        <input
                          type="text"
                          name=""
                          className="border-b-2 border-[#DDDDDD] outline-none pt-2"
                        />

                        <div className="flex items-center justify-between">
                          <div className="w-2/5 flex items-start flex-col">
                            <span className="text-[#6F6F6F] pt-2">
                              SKU Left
                            </span>
                            <input
                              type="text"
                              name=""
                              className="w-full border-b-2 border-[#DDDDDD] outline-none pt-2"
                            />
                          </div>

                          <div className="w-2/5 flex items-start flex-col">
                            <span className="text-[#6F6F6F] pt-2">
                              SKU Used
                            </span>
                            <input
                              type="text"
                              name=""
                              className="w-full border-b-2 border-[#DDDDDD] outline-none pt-2"
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="w-2/5 flex items-start flex-col">
                            <span className="text-[#6F6F6F] pt-2">
                              SKU Defective
                            </span>
                            <input
                              type="text"
                              name=""
                              className="w-full border-b-2 border-[#DDDDDD] outline-none pt-2"
                            />
                          </div>

                          <div className="w-2/5 flex items-start flex-col">
                            <span className="text-[#6F6F6F] pt-2">
                              lorem Ipsum
                            </span>
                            <input
                              type="text"
                              name=""
                              className="w-full border-b-2 border-[#DDDDDD] outline-none pt-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full basis-6/12 pl-0 xl:pl-7 py-3 xl:py-0 xl:p-3">
                    <div className="flex items-start justify-between">
                      <div className="basis-9/12">
                        <strong>Lorem Ipsum Lorem Ipsum</strong>
                      </div>
                      <div className="basis-3/12 mr-3">
                        {formFields?.map((item: FormField) => (
                          <Dropdown
                            title={item.title}
                            options={item?.options}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="overflow-y-scroll h-[8rem] mt-2 xl:mt-0">
                      <div className="flex items-center border border-[#DDDDDD] px-3 py-1 mt-3 rounded-md cursor-pointer mr-2">
                        <span className="basis-0/12 pr-3">
                          <input
                            type="checkbox"
                            name="select patient"
                            className="cursor-pointer"
                          />
                        </span>

                        <span className="flex items-center basis-5/12">
                          <Image
                            width={40}
                            src={demoImage}
                            alt="patient image"
                            className="rounded-md"
                          />
                          <span className="pl-2 font-semibold">
                            Sheetal Sharma
                          </span>
                        </span>

                        <span className="basis-5/12 text-[#A0A0A0]">
                          order placed 23,Aug 2023
                        </span>

                        <span className="basis-2/12">
                          {pathname === "/health-care" ? (
                            <>
                              <span className="text-xs pr-2 underline text-[#10800E]">
                                Approve
                              </span>
                              <span className="text-xs underline text-[#FF4B4B]">
                                Deny
                              </span>
                            </>
                          ) : (
                            <input
                              type="number"
                              name="medicine quantity"
                              className="w-full h-[1.5rem] border border-[#0E8080] outline-none rounded-sm pl-1"
                            />
                          )}
                        </span>
                      </div>

                      <div className="flex items-center border border-[#DDDDDD] px-3 py-1 mt-3 rounded-md cursor-pointer mr-2">
                        <span className="basis-0/12 pr-3">
                          <input
                            type="checkbox"
                            name="select patient"
                            className="cursor-pointer"
                          />
                        </span>

                        <span className="flex items-center basis-5/12">
                          <Image
                            width={40}
                            src={demoImage}
                            alt="patient image"
                            className="rounded-md"
                          />
                          <span className="pl-2 font-semibold">
                            Sheetal Sharma
                          </span>
                        </span>

                        <span className="basis-5/12 text-[#A0A0A0]">
                          order placed 23,Aug 2023
                        </span>

                        <span className="basis-2/12">
                          {pathname === "/health-care" ? (
                            <>
                              <span className="text-xs pr-2 underline text-[#10800E]">
                                Approve
                              </span>
                              <span className="text-xs underline text-[#FF4B4B]">
                                Deny
                              </span>
                            </>
                          ) : (
                            <input
                              type="number"
                              name="medicine quantity"
                              className="w-full h-[1.5rem] border border-[#0E8080] outline-none rounded-sm pl-1"
                            />
                          )}
                        </span>
                      </div>

                      <div className="flex items-center border border-[#DDDDDD] px-3 py-1 mt-3 rounded-md cursor-pointer mr-2">
                        <span className="basis-0/12 pr-3">
                          <input
                            type="checkbox"
                            name="select patient"
                            className="cursor-pointer"
                          />
                        </span>

                        <span className="flex items-center basis-5/12">
                          <Image
                            width={40}
                            src={demoImage}
                            alt="patient image"
                            className="rounded-md"
                          />
                          <span className="pl-2 font-semibold">
                            Sheetal Sharma
                          </span>
                        </span>

                        <span className="basis-5/12 text-[#A0A0A0]">
                          order placed 23,Aug 2023
                        </span>

                        <span className="basis-2/12">
                          {pathname === "/health-care" ? (
                            <>
                              <span className="text-xs pr-2 underline text-[#10800E]">
                                Approve
                              </span>
                              <span className="text-xs underline text-[#FF4B4B]">
                                Deny
                              </span>
                            </>
                          ) : (
                            <input
                              type="number"
                              name="medicine quantity"
                              className="w-full h-[1.5rem] border border-[#0E8080] outline-none rounded-sm pl-1"
                            />
                          )}
                        </span>
                      </div>
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

          <span className="block h-[0.5rem]"></span>
        </tbody>
      </table>
      <ConfirmBooking />
      <BookingDoneModal title="Inventory send successfully!" path="/inventory"/>
    </div>
  );
};

export default InventoryTable;
