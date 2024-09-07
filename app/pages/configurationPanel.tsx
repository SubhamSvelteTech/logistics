"use client"
import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/breadcrumb/BreadCrumb";
import PatientDetailCard from "../(dashboard)/work-order/configuration-panel/ConfigurationComp/PatientDetailCard";
import WorkOrderQueueCard from "../(dashboard)/work-order/configuration-panel/ConfigurationComp/WorkOrderQueueCard";
import CalenderWithSlots from "../(dashboard)/work-order/configuration-panel/ConfigurationComp/CalenderWithSlots";
import WorkOrderDropdown from "../(dashboard)/work-order/configuration-panel/ConfigurationComp/WorkOrderDropdown";
import YourOrder from "../(dashboard)/work-order/configuration-panel/ConfigurationComp/YourOrder";
import Status from "../(dashboard)/work-order/configuration-panel/ConfigurationComp/Status";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "@/services/utils/hooks/useApi";
import { PATIENT_BY_ID } from "../constants/apiEndpoints";
import { useParams } from "next/navigation";
import { addWorkOrderTask, resetWorkOrder } from "@/Redux/Slices/selectedWorkOrderSlice";
import DeliveryAddress from "@/modals/DeliveryAddress";
import { addAssignTo, resetAssignTo } from "@/Redux/Slices/assignToSlice";
import ConfirmBooking from "@/modals/ConfirmBooking";
import BookingDoneModal from "@/modals/BookingDoneModal";
import { getPatientAddress } from "../common/HelperFunctions";
import { addPatientAddress, resetPatientAddress } from "@/Redux/Slices/patientAddressesSlice";
import { closeAllModals } from "@/Redux/Slices/modalSlice";
import PrescriptionModal from "@/modals/PrescriptionModal";
import { resetAssignedUser } from "@/Redux/Slices/assignedUserSlice";
import { addConfirmedData } from "@/Redux/Slices/confirmModalDataSlice";

const ConfigurationPanel = () => {
  const {selectedWorkOrder} = useSelector((state:any)=>state)
  const {id}:any = useParams();
  const dispatch = useDispatch();
  const [addressFormData, setAddressFormData] = useState<any>({patientId:id});

  const getAddress = async()=>{
    const res = await getPatientAddress(id);
    dispatch(addPatientAddress(res))
  }

  const getPatientAndTaskDetails = async() => {
    const res = await axiosInstance.get(PATIENT_BY_ID+id)
    dispatch(addWorkOrderTask(res?.data?.data?.data?.[0]));
  }

  useEffect(()=>{
    getPatientAndTaskDetails();
    const payload = {
      patientId:id
    }
    dispatch(addAssignTo({...payload}))
  },[id])

  useEffect(()=>{
    getAddress();
    return () => {
      dispatch(resetAssignTo())
      dispatch(resetPatientAddress())
      dispatch(closeAllModals())
      dispatch(resetWorkOrder())
      dispatch(resetAssignedUser())
    }
  },[])

  console.log(selectedWorkOrder,'selectedWorkOrder')
  return (
    <>
      <div className="flex flex-col md:flex-row gap-2">
        {/* <div className="bg-white rounded-lg py-6 px-4 md:w-3/4"> */}
        <div className="bg-white rounded-lg py-6 px-4">
          <BreadCrumb title="Configuration Panel" />

          <div className="grid lg:grid-cols-4 grid-cols-1 mt-6 md:gap-4">
            <PatientDetailCard selectedWorkOrder={selectedWorkOrder}/>
            <WorkOrderQueueCard selectedWorkOrder={selectedWorkOrder}/>
          </div>

          {/* calendar */}
          <div className="flex flex-col md:flex-col lg:flex-row mt-6 gap-4">
            {/* calender */}
            <CalenderWithSlots />
            <WorkOrderDropdown selectedWorkOrder={selectedWorkOrder} id={id}/>
          </div>
          {/* <hr className="mt-4 border-[1px]" /> */}
          {/* <YourOrder /> */}
        </div>
        {/* status */}
        {/* on enable status add md:w-[3/4] tp parent div */}
        {/* <Status selectedWorkOrder={selectedWorkOrder}/> */}
      </div>

      {/* modal */}
      <DeliveryAddress setAddressFormData={setAddressFormData} addressFormData={addressFormData} id={id}/>
      <ConfirmBooking />
      <BookingDoneModal title="Booking done successfully!" path="/work-order"/>
      <PrescriptionModal/>
    </>
  );
};

export default ConfigurationPanel;
