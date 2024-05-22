"use client"
import React from 'react'
import emailIcon from "@Icons/email.svg"
import passwordIcon from "@Icons/password.png"
import Image from 'next/image'
import CustomButton from '../Utils/CustomButton'
import {signIn} from "next-auth/react"
import {  useRouter } from 'next/navigation'

// import ema from "../../../"

const Login = () => {
    const router = useRouter()
    const handleClick = async(e:any) => {
        e.preventDefault()
        try {
            const res:any = await signIn("credentials",
            {email:"john@gmail.com",password:"1234",redirect:false}
        )
            console.log(res,"res")
            if (res?.error) {
               console.log(res?.error,"errro")
                return;
              }
             router.replace("/protected")
        } catch (error) {
            console.log("error")
        }
   
    }
  return (
    <div className="bg-login h-[calc(100vh-76px)] bg-center bg-no-repeat bg-cover w-full relative mobile:flex mobile:flex-col mobile:justify-center mobile:px-2 mobile:items-center">
        <div className='mobile:w-[350px] mac:w-[400px] laptops:w-[500px] laptops:absolute laptops:right-[5%] mac:absolute mac:right-[5%] laptops:top-[25%] mac:top-[20%] border rounded-lg border-black mobile:flex mobile:flex-col mobile:justify-center'>
            <div className='flex flex-col p-4 text-white bg-teal rounded-t-md'>
                <h2 className='text-4xl font-bold p-2'>Sign In</h2>
                <span className='text-xs font-medium p-2'>Lorem ipsum dolor sit amet consectetur.
Elit congue pretium sapien cursus id odio ornare.</span>
            </div>
            <div className='flex flex-col bg-white rounded-lg px-4 relative'>
                <div className='flex items-center border-b-[1px] px-2 mt-10'>
               <Image className='' src={emailIcon} height={20} width={20} alt="email-icon" /> 
                <input className='border-none bg-transparent w-[100%] p-2 outline-none appearance-none' type='email' placeholder='Email' />
                </div>
                <div className='flex items-center border-b-[1px] px-2 mt-10 mb-20'>
                <Image src={passwordIcon} height={20} width={20} alt="password-icon" /> 
                <input className='border-none bg-transparent w-[100%] p-2 outline-none appearance-none' type='password' placeholder='Password' />
                </div>
                <div className='flex justify-center absolute left-[50%] bottom-0 translate-x-[-50%] translate-y-[50%]'>
                <CustomButton handleClick={handleClick} containerStyles='bg-teal text-center h-10 px-16 rounded-lg text-white' title="Login" />
            </div>
           
            </div>
       
        </div>
    </div>
  )
}

export default Login