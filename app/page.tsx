// import Image from 'next/image'
import Login from './components/Login/Login'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from './api/auth/[...nextauth]/route';


export default async function Home() {
  const session:any = await getServerSession(authOptions)
  if (session?.status === "authenticated") redirect("/protected");
  return (
        <div>
          <Login />
      </div>

  )
}
