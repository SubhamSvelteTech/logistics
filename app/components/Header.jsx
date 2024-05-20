import React from 'react'
import GLLOGO from "../../public/icons/gl-logo.svg"
import Image from 'next/image'
import { PiShoppingCartFill } from "react-icons/pi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <div className='bg-teal w-full p-4'>
        <div className='flex justify-between items-center'>
        <Image  src={GLLOGO} width={200} height={100} alt="gl-logo" priority />
        <div className='flex items-center justify-center'>
        <PiShoppingCartFill className='p-1 w-[35px] h-[30px] text-white' />
        <MdOutlineNotificationsNone className='p-1  w-[35px] h-[30px] text-white'  />
        <FaUserCircle className='p-1 w-[30px] h-[35px] text-white'  />
        </div>
        </div>
    </div>
  )
}

export default Header