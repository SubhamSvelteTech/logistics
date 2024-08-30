"use client";
import BreadCrumb from "@/app/components/breadcrumb/BreadCrumb";
import Dropdown from "@/app/components/dropdown/Dropdown";
import SearchBar from "@/app/components/searchbar/SearchBar";
import { FormField } from "@/Interfaces/Utils/Inventory";
import { IoAddOutline } from "react-icons/io5";
import React from "react";
import { usePathname } from "next/navigation";

const Filter = ({ title }: { title: string }) => {
  const pathname = usePathname();
  const formFields: any = [
    {
      id: 1,
      ques: "",
      title: "Category: Injectables",
      options: ["1", "2", "3"],
    },
    { id: 2, ques: "", title: "Sort By: A-Z", options: ["1", "2", "3"] },
    { id: 3, ques: "", title: "Sort By : Location", options: ["1", "2", "3"] },
  ];

  console.log(pathname, "pathname");
  return (
    <>
      <div className="bg-white rounded-lg py-6 px-8">
        <div className="flex items-center justify-between">
          <BreadCrumb title={title} />

          {pathname === "/inventory" && (
            <button className="w-36 bg-[#0E8080] text-xs py-2 px-3 rounded-md text-white flex items-center justify-around">
              Add New Items <IoAddOutline size={20} />
            </button>
          )}
        </div>
        <div className="grid md:grid-cols-8 gap-2 xxs:pr-8 mt-4 items-center">
          {formFields?.map((item: FormField) => (
            <Dropdown title={item.title} options={item?.options} />
          ))}
          <SearchBar />
          <div className="col-span-2 text-sm text-[#7C7C7C]">
            Showing results for Delhi
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
