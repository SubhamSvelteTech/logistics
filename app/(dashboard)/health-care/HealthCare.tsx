"use client";
import React, { useEffect, useState } from "react";
import Filter from "../inventory/components/Filter";
import InventoryTable from "../inventory/components/InventoryTable";
import { GET_WORKERS } from "@/app/constants/apiEndpoints";
import axiosInstance from "@/services/utils/hooks/useApi";
import { useSelector } from "react-redux";

const HealthCare = () => {
  const [inventory, setInventory] = useState<any[]>([]);
  const isInventoryData = useSelector(
    (state: any) => state?.inventory?.getInventory
  );
  const tableHeaders = [
    "Name",
    "Phone No.",
    "Location",
    // "Total Allotted Assets",
    "Profile",
  ];

  useEffect(() => {
    getInventory();
  }, [isInventoryData]);

  const getInventory = async () => {
    const res = await axiosInstance.get(`${GET_WORKERS}?page=0&pageSize=10`);
    if (res?.status === 200) {
      setInventory([...res?.data?.data]);
    }
  };

  return (
    <>
      <Filter title="Health Care Worker's" setInventory={setInventory} />
      <hr className="my-5 text-[#B3B3B3]" />
      <InventoryTable
        endPoint={GET_WORKERS}
        tableHeaders={tableHeaders}
        inventory={inventory}
      />
    </>
  );
};

export default HealthCare;
