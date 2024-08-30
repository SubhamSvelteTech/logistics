import axiosInstance from "@/services/utils/hooks/useApi"
import { FETCH_ASSIGNED_TO } from "../constants/apiEndpoints"

export const fetchAssignedTo = async(id:any,addressId:any) => {
    const res = await axiosInstance.get(`${FETCH_ASSIGNED_TO}?patientId=${id}&addressId=${addressId}`)
    return res?.data?.data
}