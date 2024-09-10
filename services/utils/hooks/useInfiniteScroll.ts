import { useState, useRef, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "./useApi";

const useInfiniteScroll = (setPatients: any, patients: any, endPoint?: any) => {
  const { selectedWorkOrder } = useSelector((state: any) => state);

  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<any>();

  const getUserDetails = async () => {
    if (!hasMore || isLoading) return;

    setIsLoading(true);
    const res = await axiosInstance.get(`${endPoint + page}&pageSize=10`);

    if (res?.status === 200) {
      const newPatients = res?.data?.data?.data;
      const nextPageAvailable = !!res?.data?.data?.next;
      setPatients((prevPatients: any) => [...prevPatients, ...newPatients]);
      setHasMore(nextPageAvailable);
      if (nextPageAvailable) {
        setPage((prevPage) => prevPage + 1);
      }
    }
    setIsLoading(false);
  };

  const lastPatientElementRef = useCallback(
    (node: any) => {
      if (isLoading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          getUserDetails();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [isLoading, hasMore]
  );

  useEffect(() => {
    getUserDetails();
  }, [selectedWorkOrder]);

  return { patients, isLoading, lastPatientElementRef };
};

export default useInfiniteScroll;
