import React from "react";
import Filter from "./components/Filter";
import InventoryTable from "./components/InventoryTable";
import { GET_INVENTORY } from "@/app/constants/apiEndpoints";

const Page = async () => {
  const tableHeaders = [
    "Name",
    "ID Number",
    "Location",
    "Total Allotted Assets",
    "Image",
  ];

  return (
    <>
      <Filter title="Inventory" />
      <hr className="my-5 text-[#B3B3B3]" />
      <InventoryTable endPoint={GET_INVENTORY} tableHeaders={tableHeaders} />
    </>
  );
};

export default Page;
