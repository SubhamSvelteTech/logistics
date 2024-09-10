import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@Conf/auth";
import Header from "./common/Header";
import Login from "./pages/login";

export default async function Home() {
  const session: any = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }

  return (
    <>
      {session == null && (
        <div className="flex flex-col h-screen">
          <Header />
          <Login />
        </div>
      )}
    </>
  );
}
