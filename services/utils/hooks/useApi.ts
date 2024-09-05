import axios, { InternalAxiosRequestConfig } from "axios";
import { getSession, signOut } from "next-auth/react";
import Toaster from "../toaster/Toaster";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const session = await getSession();
    if (session && config.headers) {
      config.headers["X-ACCESS-TOKEN"] = `${session?.user?.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful response
    if (response?.status === 200) {
      // Toaster("success",response.data.message)
    }
    return response;
  },
  (error) => {
    // Handle error response
    if (error.response.statusText === "Unauthorized") {
      // Server responded with a status other than 2xx
      signOut();
      Toaster("error", error.response.data.message);
    } else if (error.request) {
      // No response was received from the server
      Toaster("error", error?.response?.data?.message);
    } else {
      // Something happened while setting up the request
      Toaster("error", `Request error: ${error.message}`);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
