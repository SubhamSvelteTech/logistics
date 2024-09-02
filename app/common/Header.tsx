"use client";
import React, { useEffect, useRef, useState } from "react";
import GLLOGO from "../../public/icons/gl-logo.svg";
import Image from "next/image";
import { PiShoppingCartFill } from "react-icons/pi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import JanetImg from "@Images/workorder/janet.svg";
import { usePathname, useRouter } from "next/navigation";
import axiosInstance from "@/services/utils/hooks/useApi";
import { SIGNOUT } from "../constants/apiEndpoints";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef =  useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignout = async() => {
    const payload = {
      refreshToken: session?.user?.refreshToken
    }
    const res = await axiosInstance.post(SIGNOUT,payload);
    if(res?.status === 200){
      signOut();
    }
  }

  console.log(session?.user?.email,'session')
  return (
    <div className="bg-teal w-full p-4 fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image src={GLLOGO} width={200} height={100} alt="gl-logo" priority />
        </Link>
        {session && pathname.length > 1 && (
          <div className="flex items-center justify-center">
            {/* <PiShoppingCartFill className="p-1 w-[35px] h-[30px] text-white" /> */}
            {/* <MdOutlineNotificationsNone className="p-1  w-[35px] h-[30px] text-white" /> */}
            <div>
              <button
                id="dropdownUserAvatarButton"
                onClick={toggleDropdown}
                className="flex text-sm bg-gray-800 rounded-full md:me-0"
                type="button"
              >
                <span className="sr-only">Open user menu</span>
                <Image
                  className="w-7 h-7 border-2 border-black rounded-full"
                  src={JanetImg}
                  alt="user photo"
                />
              </button>

              {isOpen && (
                <div
                ref={dropdownRef}
                  id="dropdownAvatar"
                  className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    {/* <div>Bonnie Green</div> */}
                    <div className="font-medium truncate">
                      {session?.user?.email}
                    </div>
                  </div>
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownUserAvatarButton"
                  >
                    <li>
                      <button
                      onClick={()=>router.push("/dashboard")}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </button>
                    </li>
                  </ul>
                  <div className="py-2">
                    <button
                      onClick={handleSignout}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
