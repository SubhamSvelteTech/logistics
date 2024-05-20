"use client"
import React from 'react'
import { sideBarItems } from '../constants/option'
import { LuHelpCircle } from 'react-icons/lu'
import Image from 'next/image'

const SideBar = () => {
    // box-shadow: 1px 0px 20px 1px #00000014;

  return (
    <div className='md:w-[20%] w-[50%]'>
    <div className=' bg-white md:p-4 shadow-[1px_0px_0px_20px_1px#00000014] h-[calc(100vh-76.25px)] relative divide-x-2s'>
        <div>
            {sideBarItems.map((item,index) => {
                return (
                    <div className='px-1 py-3 flex items-center'>
                       <span className='p-2'>{item.icon}</span>
                        <li className='list-none font-medium text-xl'>{item.name}</li>
                    </div>
                )
            })}
               <div className='flex shadow-[1px_0px_0px_20px_1px#00000014] w-[100%] left-0 p-4  items-center absolute bottom-0 border-t-2 border-gray '>
       <span className='p-2'><LuHelpCircle /></span>
       <span className='font-medium text-xl'>Help</span>
   </div>
        </div>
        {/* SideBar Footer */}
        
    </div>
 
   </div>
  )
}

export default SideBar