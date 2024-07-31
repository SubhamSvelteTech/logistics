import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@Conf/auth";
import Header from "../common/Header";
import { redirect } from "next/navigation";
import SideBar from "../common/SideBar";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session: any = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 relative">
          {/* Fixed Sidebar */}
          <div className="fixed pt-20 h-full bg-white shadow-lg">
            <SideBar />
          </div>
          {/* Main Content Area */}
          <main className="lg:ml-[14rem] md:ml-0 p-4 bg-gray-100 pt-24 w-full overflow-y-auto h-full">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default layout;
