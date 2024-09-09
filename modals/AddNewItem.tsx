import Modal from "@/app/components/Modal";
import { closeModal, openModal } from "@/Redux/Slices/modalSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BookingDoneModal from "./BookingDoneModal";
import axiosInstance from "@/services/utils/hooks/useApi";
import {
  ADD_INVENTORY_PRODUCT,
  GET_CATEGORIES,
} from "@/app/constants/apiEndpoints";
import { toast } from "react-toastify";
import { inventoryReducer } from "@/Redux/Reducers/inventoryReducer";
import { isInventory } from "@/Redux/Slices/inventorySlice";

let formData = new FormData();

const AddNewItem = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [productDetail, setProductDetail] = useState<any>({});
  const dispatch = useDispatch();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const res = await axiosInstance.get(`${GET_CATEGORIES}?page=0&pageSize=10`);
    if (res.status === 200) {
      setCategories([...res?.data?.data]);
    }
  };

  const addInventoryProduct = async () => {
    for (const key in productDetail) {
      if (key !== "image") {
        formData.set(key, productDetail[key]);
      }
    }

    if (productDetail?.image?.length > 0) {
      const res = await axiosInstance.post(
        `${ADD_INVENTORY_PRODUCT}?page=0&pageSize=10`,
        formData
      );
      if (res.status === 200) {
        toast.success(res?.data?.message);
      }

      dispatch(closeModal({ id: "add-new-item" }));
      dispatch(openModal({ id: "booking-done" }));
      formData = new FormData();
      setProductDetail({});
      dispatch(isInventory(true));
    } else {
      toast.warn("Please select an image");
    }
  };

  const handleChange = (e: any) => {
    const { value, name, files } = e.target;
    const validImageTypes = ["image/jpeg", "image/png"];

    if (files) {
      const fileType = files[0]?.type;
      if (validImageTypes.includes(fileType)) {
        formData.append("image", files[0]);
      } else {
        toast.warn("Please upload only image file");
        return;
      }
    }

    setProductDetail((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addInventoryProduct();
  };

  return (
    <>
      <Modal id="add-new-item">
        <div className="flex justify-center">
          <span className="font-bold">Add New Items</span>
        </div>
        <form
          className="max-w-md mx-auto px-4 mt-2"
          onSubmit={(e) => submitForm(e)}
        >
          <div className="flex items-center gap-5">
            <div className="relative z-0 w-full">
              <label htmlFor="item" className="text-sm">
                Name
              </label>
              <input
                type="text"
                name="item"
                id="item"
                value={productDetail?.item}
                className="block mb-4 w-full text-sm text-gray-900 bg-transparent border border-black appearance-none dark:text-white dark:border-black-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer px-2 py-1"
                placeholder=" "
                required
                onChange={handleChange}
              />
            </div>

            <div className="relative z-0 w-full">
              <label htmlFor="itemNumber" className="text-sm">
                ID Number
              </label>
              <input
                type="number"
                name="itemNumber"
                id="itemNumber"
                value={productDetail?.itemNumber}
                className="block mb-4 w-full text-sm text-gray-900 bg-transparent border border-black appearance-none dark:text-white dark:border-black-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer px-2 py-1"
                placeholder=" "
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <label htmlFor="categoryId" className="text-sm">
              Category
            </label>

            <select
              name="categoryId"
              id="categoryId"
              defaultValue=""
              value={productDetail?.categoryId}
              className="cursor-pointer block mb-4 w-full text-sm text-gray-900 bg-transparent border border-black appearance-none dark:text-white dark:border-black-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer px-2 py-1"
              required
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Category
              </option>

              {categories?.map((category) => (
                <option value={category?._id} key={category?._id}>
                  {category?.name}
                </option>
              ))}
            </select>

            <label htmlFor="location" className="text-sm">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={productDetail?.location}
              className="block mb-4 w-full text-sm text-gray-900 bg-transparent border border-black appearance-none dark:text-white dark:border-black-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer px-2 py-1"
              placeholder=" "
              required
              onChange={handleChange}
            />

            <label htmlFor="totalValue" className="text-sm">
              Total Allotted Assets
            </label>
            <input
              type="number"
              name="totalValue"
              id="totalValue"
              value={productDetail?.totalValue}
              className="block mb-4 w-full text-sm text-gray-900 bg-transparent border border-black appearance-none dark:text-white dark:border-black-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer px-2 py-1"
              placeholder=" "
              required
              onChange={handleChange}
            />

            <span className="text-sm">Image</span>

            <label
              className="flex border border-[#B8BAC2] p-2 items-center justify-between cursor-pointer"
              htmlFor="image"
            >
              {/* <span className="text-sm" style={{ color: "#c6c6c6" }}>
                Upload Image
              </span> */}
              {/* <FileUploader> */}
              <input
                type="file"
                name="image"
                id="image"
                className="hidden"
                accept="image/*"
                onChange={handleChange}
              />

              <div className="w-full flex items-center justify-between">
                <span className="text-xs text-[#9F9494]">
                  {productDetail?.image?.split("\\")?.pop() || "Upload Image"}
                </span>
                <div className="bg-black text-white p-1 px-3 text-sm">
                  Browse File
                </div>
              </div>

              {/* </FileUploader> */}
            </label>
          </div>

          <button
            type="submit"
            className="text-sm px-8 py-1 text-white bg-black rounded float-right"
          >
            Add
          </button>
        </form>
      </Modal>

      <BookingDoneModal
        title="New Items added successfully!"
        path="/inventory"
      />
    </>
  );
};

export default AddNewItem;
