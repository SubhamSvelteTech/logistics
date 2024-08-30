import { openModal } from "@/Redux/Slices/modalSlice";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import AddAddressIcon from "@Icons/add-address.svg";
import HomeIcon from "@Icons/home-black.svg";
import OfficeIcon from "@Icons/office-black.svg";
import DefaultImg from "@Images/astha-gill.svg";
import { addAssignTo } from "@/Redux/Slices/assignToSlice";
import axiosInstance from "@/services/utils/hooks/useApi";
import { FETCH_ASSIGNED_TO } from "../constants/apiEndpoints";
import { fetchAssignedTo } from "../common/HelperFunctions";
import { addFetchAssignTo } from "@/Redux/Slices/fetchAssignedToSlice";

const CustomSelect = ({ item, placeholder = "Select an option",id }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const dropdownRef = useRef<any>(null);
  const dispatch = useDispatch();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = async(option: any,data:any) => {
    console.log(data,'cvdvsv')
    if (option === "Add New Address") {
      dispatch(openModal({ id: "address" }));
    }
    setSelectedOption(option);
    if(item?.identifier === "address"){
      const res = await fetchAssignedTo(id,data)
      dispatch(addFetchAssignTo(res))
      console.log(res,'bvcbcv')
      const payload = {
        address: option
      }
      dispatch(addAssignTo({...payload}))
    }
    setIsOpen(false);
  };

  const handleClickOutside = (event: any) => {
    if (dropdownRef?.current && !dropdownRef?.current?.contains(event.target)) {
      setIsOpen(false);
    }
  };
  const handleKeyDown = (event: any) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(()=>{
    if(item?.identifier === "ordertype" || item?.identifier === "status"){
      setSelectedOption(item?.options?.[0]?.name)
    }
  },[])

  return (
    <div className="relative inline-block w-64 text-left" ref={dropdownRef}>
      <div>
        <button
          onClick={toggleDropdown}
          className="w-full px-4 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-5"
        >
          {selectedOption ? selectedOption : placeholder}
          <svg
            className="w-5 h-5 ml-2 -mr-1 text-gray-500 inline-block float-right"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg origin-top-left ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className={`py-1 overflow-y-scroll h-[200px]`}>
            {item?.options?.map((option: any) => (
              <a
                key={option.name}
                onClick={() =>
                  handleOptionClick(
                    option?.name ? option?.name : option?.address,option?._id
                  )
                }
                className="block py-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                {option?.name === "Add New Address" ? (
                  <>
                    <hr />
                    <div className="flex items-center gap-2 py-2 px-4">
                      <Image src={AddAddressIcon} alt="" width={15} />
                      <span className="text-teal font-bold text-md">
                        {option?.name}
                      </span>
                    </div>
                  </>
                ) : option?.name ? (
                  <div className="px-4 hover:bg-[#0e808040] py-1">
                    {option?.name}
                  </div>
                ) : item?.identifier === "address" ? (
                  <div className="hover:bg-[#0e808040] px-4">
                    <div className="flex gap-2 items-center py-1">
                      <Image
                        src={
                          option?.addressName === "Home" ? HomeIcon : OfficeIcon
                        }
                        alt=""
                        width={12}
                      />
                      <span className="font-bold text-md">
                        {option?.addressName}
                      </span>
                    </div>
                    <span className="text-[#787878] font-xs">
                      {option?.address}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center px-2 gap-2 hover:bg-[#0e808040]">
                    <div className="flex-shrink-0">
                      <Image src={DefaultImg} alt="" width={50} height={50} />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold">{option?.fullName}</p>
                      <p>
                        {option?.address}, {option?.state}
                      </p>
                      <p>{option?.mobile}</p>
                    </div>
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
