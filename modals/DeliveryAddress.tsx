"use client";
import React, { useEffect, useState } from "react";
import Modal from "@/app/components/Modal";
import Map from "@/app/components/Map";
import axiosInstance from "@/services/utils/hooks/useApi";
import { ADD_ADDRESS, FETCH_ADDRESS } from "@/app/constants/apiEndpoints";
import Toaster from "@/services/utils/toaster/Toaster";
import { useDispatch } from "react-redux";
import { closeModal } from "@/Redux/Slices/modalSlice";
import { useQueryClient } from "@tanstack/react-query";

const addressType = [
  { name: "Home" },
  { name: "Office" },
  { name: "Work" },
  { name: "Other" },
];
const DeliveryAddress = ({ setAddressFormData, addressFormData, id }: any) => {
  const queryClient: any = useQueryClient();
  const [formStep, setFormStep] = useState(1);
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, name } = e.target;
    setAddressFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axiosInstance.post(ADD_ADDRESS, { ...addressFormData });
    if (res?.status === 200) {
      dispatch(closeModal({ id: "address" }));
      setFormStep(1);
      Toaster("success", "Address Added Successfully!"); 
      // Refetch or invalidate the query
      queryClient.invalidateQueries(["address", id]);
    }
  };
  

  return (
    <Modal id="address">
      <div className="px-4">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="max-w-md mx-auto p-4">
            <h2 className="text-lg font-bold mb-2">Delivery address</h2>
            {formStep === 1 && (
              <>
                <p className="text-xs text-gray-500 mb-6">Add new address</p>
                <Map
                  setAddressFormData={setAddressFormData}
                  addressFormData={addressFormData}
                />
              </>
            )}
            {formStep === 2 && (
              <>
                <div className="flex gap-2">
                  {addressType?.map((item: any) => (
                    <button
                      type="button"
                      onClick={() =>
                        setAddressFormData((prev: any) => ({
                          ...prev,
                          addressName: item?.name,
                        }))
                      }
                      className="text-xs border rounded px-2 text-teal"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>

                <div className="mt-4">
                  <input
                    type="text"
                    name="address"
                    required={true}
                    placeholder="House/Flat/Floor No."
                    className="text-xs border rounded px-2 py-1 w-full"
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    name="landmark"
                    placeholder="Locality/Landmark (optional)"
                    className="text-xs border rounded px-2 py-1 w-full"
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </>
            )}
          </div>

          <div className="flex justify-end px-4 mt-4 gap-2">
            {formStep === 2 && (
              <button
                className="bg-gray rounded text-black text-sm px-4 py-1"
                onClick={() => setFormStep(1)}
              >
                Back
              </button>
            )}
            <button
              disabled={!addressFormData.hasOwnProperty("zipcode")}
              type={formStep === 2 ? "submit" : "button"}
              className={`bg-teal rounded text-white text-sm px-4 py-1 ${
                !addressFormData.hasOwnProperty("zipcode")
                  ? " cursor-not-allowed"
                  : ""
              }`}
              onClick={() => setFormStep(2)}
            >
              {formStep === 2 ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default DeliveryAddress;
