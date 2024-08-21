import { useIsFetching } from "@tanstack/react-query";
import React from "react";
import Loader from "./loader/Loader";

const GlobalLoader = () => {
  const isFetching = useIsFetching();

  if (isFetching) {
    return <Loader />;
  }

  return null;
};

export default GlobalLoader;
