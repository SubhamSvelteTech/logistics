"use client";
import React, { useEffect, useRef, useState } from "react";
import { addressTypeOption } from "../constants/option";
import HomeIcon from "@Icons/home-icon.svg"
import Image from "next/image";

const AddressTypeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const [selectedOption, setSelectedOption] = useState<any>({id:1,title:"Home 2",icon: HomeIcon});
  const dropdownRef = useRef<any>(null);
  //   const dispatch = useDispatch();

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: any) => {
    if (dropdownRef?.current && !dropdownRef?.current?.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="flex justify-end" ref={dropdownRef}>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            onClick={toggleDropdown}
            className="w-full px-2 py-1 text-white text-xs font-medium text-gray-700 bg-teal border border-gray-300 rounded-md shadow-sm hover:bg-gray-5"
          >
            <div className="flex items-center gap-1">
              <Image src={selectedOption?.icon} alt="" width={15}/>
              {selectedOption?.title}
              <svg
                className="w-5 h-5 ml-2 -mr-1 text-gray-500 inline-block float-right"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>

        {isOpen && (
          <div className="absolute z-10 w-full cursor-pointer mt-2 bg-white rounded-md shadow-lg origin-top-left text-xs px-2 py-1">
            {addressTypeOption?.map((item: any) => (
              <div onClick={() => handleOptionClick(item)} className="py-1 hover:bg-teal hover:text-white rounded px-1">
                {item?.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressTypeDropdown;
