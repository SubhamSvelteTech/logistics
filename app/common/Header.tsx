import React from "react";
import GLLOGO from "../../public/icons/gl-logo.svg";
import Image from "next/image";
import { PiShoppingCartFill } from "react-icons/pi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
const Header = async () => {
  const session: any = await getServerSession(authOptions);
  return (
    <div className="bg-teal w-full p-4 fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center">
        <Image src={GLLOGO} width={200} height={100} alt="gl-logo" priority />
        {session && (
          <div className="flex items-center justify-center">
            <PiShoppingCartFill className="p-1 w-[35px] h-[30px] text-white" />
            <MdOutlineNotificationsNone className="p-1  w-[35px] h-[30px] text-white" />
            <FaUserCircle className="p-1 w-[30px] h-[35px] text-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
