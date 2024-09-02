import Modal from "@/app/components/Modal";
import { openModal } from "@/Redux/Slices/modalSlice";
import React from "react";
import { useDispatch } from "react-redux";
import BookingDoneModal from "./BookingDoneModal";

const AddNewItem = () => {
  const dispatch = useDispatch();

  const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(openModal({ id: "booking-done" }));
  };

  return (
    <>
      <Modal id="add-new-item">
        <div className="flex justify-center">
          <span className="font-bold">Add New Items</span>
        </div>
        <form className="max-w-md mx-auto px-4 mt-2">
          <div className="flex items-center gap-5">
            <div className="relative z-0 w-full">
              <label htmlFor="item-name" className="text-sm">
                Name
              </label>
              <input
                type="text"
                name="item-name"
                id="item-name"
                className="block mb-4 w-full text-sm text-gray-900 bg-transparent border border-black appearance-none dark:text-white dark:border-black-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer px-2 py-1"
                placeholder=" "
                required
              />
            </div>

            <div className="relative z-0 w-full">
              <label htmlFor="item-id-number" className="text-sm">
                ID Number
              </label>
              <input
                type="number"
                name="item-id-number"
                id="item-id-number"
                className="block mb-4 w-full text-sm text-gray-900 bg-transparent border border-black appearance-none dark:text-white dark:border-black-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer px-2 py-1"
                placeholder=" "
                required
              />
            </div>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <label htmlFor="location-for-item" className="text-sm">
              Location
            </label>
            <input
              type="text"
              name="location-for-item"
              id="location-for-item"
              className="block mb-4 w-full text-sm text-gray-900 bg-transparent border border-black appearance-none dark:text-white dark:border-black-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer px-2 py-1"
              placeholder=" "
              required
            />

            <label htmlFor="total-assets" className="text-sm">
              Total Allotted Assets
            </label>
            <input
              type="number"
              name="total-assets"
              id="total-assets"
              className="block mb-4 w-full text-sm text-gray-900 bg-transparent border border-black appearance-none dark:text-white dark:border-black-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer px-2 py-1"
              placeholder=" "
              required
            />

            <span className="text-sm">Image</span>

            <label
              className="flex border border-[#B8BAC2] p-2 items-center justify-between cursor-pointer"
              htmlFor="upload-med-image"
            >
              <span className="text-sm" style={{ color: "#c6c6c6" }}>
                Upload Image
              </span>
              {/* <FileUploader> */}
              <input
                type="file"
                name="upload-med-image"
                id="upload-med-image"
              />
              <div className="bg-black text-white p-1 px-3 text-sm">
                Browse File
              </div>
              {/* </FileUploader> */}
            </label>
          </div>

          <button
            type="submit"
            className="text-sm px-8 py-1 text-white bg-black rounded float-right"
            onClick={(e) => submitForm(e)}
          >
            Add
          </button>
        </form>
      </Modal>
      <BookingDoneModal title="New Items added successfully!" />
    </>
  );
};

export default AddNewItem;
