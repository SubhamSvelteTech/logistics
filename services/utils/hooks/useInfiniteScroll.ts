import { useState, useEffect, useRef } from 'react';

const useInfiniteScroll = ({ fetchDataFn, hasMoreData, threshold = 0.8 }:any) => {
  const [page, setPage] = useState(0); // Start from page 0
  const [loading, setLoading] = useState(false); // Flag to manage loading state
  const loaderRef = useRef(null);
  const initialLoad = useRef(true); // To track initial load

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMoreData && !loading && !initialLoad.current) {
          setPage((prev) => prev + 1); // Increment page only if more data is available
        }
      },
      {
        root: null,
        rootMargin: '20px',
        threshold: threshold,
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMoreData, threshold, loading]);

  useEffect(() => {
    const fetchPageData = async () => {
      if (!loading) {
        setLoading(true);
        await fetchDataFn(page);
        setLoading(false);
      }
    };

    if (initialLoad.current) {
      fetchPageData().finally(() => {
        initialLoad.current = false;
      });
    } else {
      fetchPageData();
    }
  }, [page]);

  return [loaderRef];
};

export default useInfiniteScroll;
