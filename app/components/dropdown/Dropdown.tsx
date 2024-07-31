import { DropdownProps } from "@/Interfaces/Utils/Dropdown";
import React from "react";

const Dropdown = ({ options,title }: DropdownProps) => {
  return (
    <>
      <div className="relative inline-block text-left w-full">
        <form className="max-w-sm mx-auto">
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>{title}</option>
            {options?.map((item,index)=>
            <option value={title}>{item}</option>
            )}
          </select>
        </form>
      </div>
    </>
  );
};

export default Dropdown;
