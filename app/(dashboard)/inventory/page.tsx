import React from "react";
import Filter from "./components/Filter";
import InventoryTable from "./components/InventoryTable";

const Page = async () => {
  return (
    <>
      <Filter title="Inventory" />
      <hr className="my-5 text-[#B3B3B3]" />
      <InventoryTable />
    </>
  );
};

export default Page;
