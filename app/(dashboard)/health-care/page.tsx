import React from "react";
import Filter from "../inventory/components/Filter";
import InventoryTable from "../inventory/components/InventoryTable";

const page = () => {
  return (
    <>
      {/* <Filter title="Health Care Worker's" />
      <hr className="my-5 text-[#B3B3B3]" /> */}
      <InventoryTable />
    </>
  );
};

export default page;
