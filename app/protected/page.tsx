"use client"
import React, { useEffect } from 'react'
import {signOut, useSession} from "next-auth/react"
import {getServerSession} from "next-auth"
import CustomButton from '../components/Utils/CustomButton'
import { useRouter } from 'next/navigation'

const page = () => {
    const {status,data}:any = useSession()
    console.log(data,"data")
    // const { status, data } = useSession();
    const router = useRouter()

    useEffect(() => {
      if (status === "unauthenticated") router.replace("/");
    }, [status]);

    const handleClick = (e:any) => {
        signOut()
    }
    // const session = await getServerSession()
    // console.log(session,"session")

    return (
        <div>
            <div>
            <CustomButton handleClick={handleClick} containerStyles='bg-teal text-center h-10 px-16 rounded-lg text-white' title="Logout`" />
            </div>
        </div>
    )

  
}

export default page