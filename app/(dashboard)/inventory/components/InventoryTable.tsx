"use client";
import React, { useEffect, useState } from "react";
import ConfirmBooking from "@/modals/ConfirmBooking";
import BookingDoneModal from "@/modals/BookingDoneModal";
import TableRow from "./TableRow";
import axiosInstance from "@/services/utils/hooks/useApi";
import { isInventory, setInventoryData } from "@/Redux/Slices/inventorySlice";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/Redux/Slices/modalSlice";
import { toast } from "react-toastify";
import { resetConfirmedData } from "@/Redux/Slices/confirmModalDataSlice";

const InventoryTable = ({
  endPoint,
  tableHeaders,
  inventory,
  assignEndPoint,
}: {
  endPoint: string;
  tableHeaders: string[];
  inventory: any;
  assignEndPoint?: string;
}) => {
  const inventoryData = useSelector((state: any) => state?.inventory);
  const { assignedQuantity, productID, workerID } = useSelector(
    (state: any) => state?.confirmModalData?.confirmModalData
  );
  const [sortOrder, setSortOrder] = useState('asc'); // asc for A to Z, desc for Z to A
  const [selectedRow, setSelectedRow] = useState<{
    id: string;
    isOpen: boolean;
  }>({
    id: "",
    isOpen: false,
  });
  const [innerRowData, setInnerRowData] = useState<any[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (inventory?.length > 0 && innerRowData?.length > 0) {
      const result = inventory.map((obj: any) => ({
        ...obj,
        innerRightData: [...innerRowData],
      }));

      dispatch(setInventoryData([...result]));
    }
  }, [inventory, innerRowData]);

  const handleAccordionToggle = (rowID: any) => {
    workerID && productID && dispatch(resetConfirmedData());

    if (selectedRow?.id === rowID) {
      setSelectedRow((prev: any) => ({
        ...prev,
        isOpen: !selectedRow?.isOpen,
      }));
    } else {
      setSelectedRow({ isOpen: true, id: rowID });
    }
  };

  const getData = async () => {
    const res = await axiosInstance.get(`${endPoint}?page=0&pageSize=10`);
    if (res?.status === 200) {
      setInnerRowData([...res?.data?.data]);
    }
  };



  const hideBtn = () => {
    return !workerID && !productID;
  };

  const assignFunc = async () => {
    if (assignedQuantity === null) {
      toast.warn("Enter Medicine Quantity");
      return;
    }

    const res = await axiosInstance.post(
      `${assignEndPoint}`,

      {
        productId: productID,
        assignedQuantity: assignedQuantity,
        userId: workerID,
      }
    );
    if (res?.status === 200) {
      dispatch(isInventory(!inventoryData?.getInventory));
      dispatch(openModal({ id: "booking-done" }));
    }
  };

  return (
    <>
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

              {tableHeaders?.map((header) => (
                <th
                  scope="col"
                  className="px-6 py-3"
                  key={`tableHeader${header}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {inventoryData?.data?.map((item: any) => (
              <React.Fragment key={item?._id}>
                <TableRow
                  item={item}
                  handleAccordionToggle={handleAccordionToggle}
                  hideBtn={hideBtn}
                  selectedRow={selectedRow}
                />
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <ConfirmBooking handleSubmit={assignFunc} title="Inventory" />
      <BookingDoneModal
        title="Inventory send successfully!"
        path="/inventory"
      />
    </>
  );
};

export default InventoryTable;
