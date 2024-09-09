"use client";
import BreadCrumb from "@/app/components/breadcrumb/BreadCrumb";
import Dropdown from "@/app/components/dropdown/Dropdown";
import SearchBar from "@/app/components/searchbar/SearchBar";
import { FormField } from "@/Interfaces/Utils/Inventory";
import { IoAddOutline } from "react-icons/io5";
import React from "react";
import { usePathname } from "next/navigation";
import { openModal } from "@/Redux/Slices/modalSlice";
import { useDispatch } from "react-redux";
import AddNewItem from "@/modals/AddNewItem";
import BookingDoneModal from "@/modals/BookingDoneModal";
import { searchAllInventory } from "@/app/common/HelperFunctions";

const Filter = ({
  title,
  setInventory,
}: {
  title: string;
  setInventory: any;
}) => {
  const pathname = usePathname();
  const dispatch = useDispatch();
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

  const handleSearch = async (query: string) => {
    const res = await searchAllInventory(query?.length > 0 ? query : "");
    if (res?.status === 200) {
      setInventory(res?.data);
    }
  };
  return (
    <>
      <div className="bg-white rounded-lg py-6 px-8">
        <div className="flex items-center justify-between">
          <BreadCrumb title={title} />

          {pathname === "/inventory" && (
            <button
              className="w-36 bg-[#0E8080] text-xs py-2 px-3 rounded-md text-white flex items-center justify-around"
              onClick={() => dispatch(openModal({ id: "add-new-item" }))}
            >
              Add New Items <IoAddOutline size={20} />
            </button>
          )}
        </div>
        <div className="grid md:grid-cols-8 gap-2 xxs:pr-8 mt-4 items-center">
          {/* {formFields?.map((item: FormField) => (
            <Dropdown title={item.title} options={item?.options} />
          ))} */}
          {pathname !== "/health-care" && <SearchBar onSearch={handleSearch} />}
          {/* <div className="col-span-2 text-sm text-[#7C7C7C]">
            Showing results for Delhi
          </div> */}
        </div>
      </div>
      <AddNewItem />
      <BookingDoneModal
        title="New Items added successfully!"
        path="/inventory"
      />
    </>
  );
};

export default Filter;
