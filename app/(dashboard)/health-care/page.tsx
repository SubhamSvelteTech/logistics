import React from "react";
import Filter from "../inventory/components/Filter";
import InventoryTable from "../inventory/components/InventoryTable";
import { GET_WORKERS } from "@/app/constants/apiEndpoints";

const page = () => {
  const tableHeaders = [
    "Name",
    "Phone No.",
    "Location",
    // "Total Allotted Assets",
    "Profile",
  ];

  return (
    <>
      <Filter title="Health Care Worker's" />
      <hr className="my-5 text-[#B3B3B3]" />
      <InventoryTable endPoint={GET_WORKERS} tableHeaders={tableHeaders} />
    </>
  );
};

export default page;
