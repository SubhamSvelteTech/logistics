"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import GlobalLoader from "./components/GlobalLoader";
import { Provider } from "react-redux";
import store from "@/Redux/Store/store";

export const AuthProvider = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <SessionProvider refetchOnWindowFocus={false}>
      <QueryClientProvider client={queryClient}>
        <GlobalLoader />
        <Provider store={store}>{children}</Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SessionProvider>
  );
};
