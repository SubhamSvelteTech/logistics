"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConfirmBooking from "@/modals/ConfirmBooking";
import BookingDoneModal from "@/modals/BookingDoneModal";
import { usePathname } from "next/navigation";
import TableRow from "./TableRow";
import axiosInstance from "@/services/utils/hooks/useApi";

const InventoryTable = ({
  endPoint,
  tableHeaders,
}: {
  endPoint: string;
  tableHeaders: string[];
}) => {
  const isInventoryData = useSelector(
    (state: any) => state?.inventory?.getInventory
  );
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [inventory, setInventory] = useState<any[]>([]);

  const dispatch = useDispatch();
  const pathname = usePathname();

  useEffect(() => {
    getInventory();
  }, [isInventoryData]);

  const getInventory = async () => {
    const res = await axiosInstance.get(`${endPoint}?page=0&pageSize=10`);
    if (res?.status === 200) {
      setInventory([...res?.data?.data]);
    }
  };

  const handleAccordionToggle = (rowIndex: any) => {
    if (selectedRow === rowIndex) {
      setAccordionOpen(!accordionOpen);
    } else {
      setAccordionOpen(true);
      setSelectedRow(rowIndex);
    }
  };

  return (
    <div className="relative overflow-x-auto bg-white px-8 py-6 rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-[#0E808033] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {/* <th scope="col" className="px-6 py-3">
              <input
                type="checkbox"
                name="Select All Inventory"
                className="cursor-pointer"
              />
            </th> */}

            {tableHeaders?.map((header, i) => (
              <th scope="col" className="px-6 py-3" key={`tableHeader${i}`}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {inventory?.map((item) => (
            <TableRow
              item={item}
              handleAccordionToggle={handleAccordionToggle}
              accordionOpen={accordionOpen}
              selectedRow={selectedRow}
            />
          ))}
        </tbody>
      </table>
      <ConfirmBooking />
      <BookingDoneModal
        title="Inventory send successfully!"
        path="/inventory"
      />
    </div>
  );
};

export default InventoryTable;
