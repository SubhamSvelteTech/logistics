"use client";
import React, { useEffect, useState } from "react";

import axiosInstance from "@/services/utils/hooks/useApi";
import { ASSIGN_INVENTORY, GET_INVENTORY, GET_WORKERS } from "@/app/constants/apiEndpoints";
import { useSelector } from "react-redux";
import Filter from "./Filter";
import InventoryTable from "./InventoryTable";

const tableHeaders = [
  "Name",
  "ID Number",
  "Location",
  "Total Allotted Assets",
  "Image",
];

const InventoryMain = () => {
  const [inventory, setInventory] = useState<any[]>([]);
  const isInventoryData = useSelector(
    (state: any) => state?.inventory?.getInventory
  );

  useEffect(() => {
    getInventory();
  }, [isInventoryData]);

  const getInventory = async () => {
    const res = await axiosInstance.get(`${GET_INVENTORY}?page=0&pageSize=10`);
    if (res?.status === 200) {
      setInventory([...res?.data?.data]);
    }
  };

  return (
    <>
      <Filter title="Inventory" setInventory={setInventory} />
      <hr className="my-5 text-[#B3B3B3]" />
      <InventoryTable
        endPoint={GET_WORKERS}
        tableHeaders={tableHeaders}
        inventory={inventory}
        assignEndPoint={ASSIGN_INVENTORY}
      />
    </>
  );
};

export default InventoryMain;
