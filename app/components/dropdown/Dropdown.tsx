import { DropdownProps } from "@/Interfaces/Utils/Dropdown";
import React from "react";

const Dropdown = ({ options, title }: DropdownProps) => {
  return (
    <div className="relative inline-block text-left w-full">
      <form className="max-w-sm mx-auto">
        <select
          id="countries"
          defaultValue={title}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs py-2 rounded-lg block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value={title}>{title}</option>
          {options?.map((item, i) => (
            <option
              className="!hover:bg-teal"
              value={item}
              key={`dropDownOption${item + i}`}
            >
              {item}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Dropdown;
