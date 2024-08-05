"use client";
import React, { useState } from "react";
import GLLOGO from "../../public/icons/gl-logo.svg";
import Image from "next/image";
import { PiShoppingCartFill } from "react-icons/pi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import JanetImg from "@Images/workorder/janet.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-teal w-full p-4 fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image src={GLLOGO} width={200} height={100} alt="gl-logo" priority />
        </Link>
        {session && (
          <div className="flex items-center justify-center">
            <PiShoppingCartFill className="p-1 w-[35px] h-[30px] text-white" />
            <MdOutlineNotificationsNone className="p-1  w-[35px] h-[30px] text-white" />
            {/* <FaUserCircle className="p-1 w-[30px] h-[35px] text-white" /> */}
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
                  id="dropdownAvatar"
                  className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>Bonnie Green</div>
                    <div className="font-medium truncate">
                      name@flowbite.com
                    </div>
                  </div>
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownUserAvatarButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className="py-2">
                    <button
                      onClick={() => signOut()}
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
