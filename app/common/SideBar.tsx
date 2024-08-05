"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { sideBarItems } from "../constants/option";
import SignOutButton from "../components/SignOutButton";

interface SidebarProps {
  sidebarOpen?: boolean;
  setSidebarOpen?: (arg: boolean) => void;
}
const SideBar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);
  const pathname = usePathname();
  const [activeTab, setactiveTab] = useState("");
  const clickHandler = ({ target }: MouseEvent) => {
    if (!sidebar.current || !trigger.current) return;
    if (
      !sidebarOpen ||
      sidebar.current.contains(target) ||
      trigger.current.contains(target)
    )
      return;
    setSidebarOpen && setSidebarOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, [sidebarOpen]);

  return (
    <>
      <aside
        ref={sidebar}
        className={`absolute z-[9999] flex w-[180px] h-full flex-col shadow-xl overflow-y-hidden duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div
          className="flex items-center justify-center p-0 border-b-1 border-white"
          style={{ color: "#FFFF" }}
        >
          <button
            ref={trigger}
            onClick={() => setSidebarOpen && setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
            className=" text-black"
          ></button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear items-center">
          {/* <!-- Sidebar Menu --> */}
          <nav className=" w-full">
            {/* <!-- Menu Group --> */}

            <div className="mt-5">
              <ul className="flex flex-col gap-2 text-xs">
                {sideBarItems?.map((item, index) => {
                  return (
                    <>
                      <li
                        key={`sidebar/${index + 1}`}
                        className={`mb-2 sidebar-list ${
                          activeTab === item.name &&
                          "bg-white rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                        }`}
                      >
                        <Link
                          href={item?.path}
                          className={`${item.styles}  ${
                            pathname === item.path ||
                            pathname?.includes(item?.path)
                              ? "selectedItem text-teal"
                              : ""
                          }  px-3`}
                        >
                          <Image
                            src={item.icon}
                            alt=""
                            width={13}
                            height={13}
                          />
                          <p className="">{item.name}</p>
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
