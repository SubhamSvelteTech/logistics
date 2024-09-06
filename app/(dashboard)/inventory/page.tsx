"use client";
import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import InventoryTable from "./components/InventoryTable";
import axiosInstance from "@/services/utils/hooks/useApi";
import { GET_INVENTORY, GET_WORKERS } from "@/app/constants/apiEndpoints";
import { useSelector } from "react-redux";

const tableHeaders = [
  "Name",
  "ID Number",
  "Location",
  "Total Allotted Assets",
  "Image",
];

const page = () => {
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
      />
    </>
  );
};

export default page;
