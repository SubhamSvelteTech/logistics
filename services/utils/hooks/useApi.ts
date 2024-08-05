import { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Toaster from "../toaster/Toaster"
import { signOut, useSession } from "next-auth/react";

const useApiHandle = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { data: session, status } = useSession();

  const apiRequest = async (
    endPoint: string,
    method: string,
    // token?: string,
    payload?: object,
    isFormData?: boolean
  ) => {
    setLoading(true);
    setError(null);

    const myHeaders = new Headers();
    myHeaders.append("X-ACCESS-TOKEN", `${session && session?.user?.accessToken}`);

    if (!isFormData) {
      myHeaders.append("Content-Type", "application/json");
    }


    const fetchData: any = {
      method,
      headers: myHeaders,
    };

    if (method !== "GET" && payload) {
      fetchData.body = isFormData ? payload : JSON.stringify(payload);
    }

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL+endPoint, fetchData);
      if (response.ok) {
        const jsonResponse = await response.json();
        // toast.success("Request successful!");
        Toaster("success",jsonResponse?.message)
        return jsonResponse;
      } else {
        const errorResponse = await response.json();
        if(errorResponse?.message === "Unauthorized! Access Token was expired!"){
            signOut()
        }
        throw new Error(errorResponse.message || "Request failed");
      }
    } catch (error: any) {
      setError(error.message || "An unexpected error occurred");
      toast.error(error.message || "An unexpected error occurred");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { apiRequest, loading, error };
};

export default useApiHandle;
