"use client";
import React, { useEffect, useState } from "react";
import emailIcon from "@Icons/email.svg";
import passwordIcon from "@Icons/password.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session, status } = useSession();
  const [userCred, setUserCred] = useState({ email: "", password: "" });
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/dashboard"); // Redirect to the dashboard if authenticated
    }
  }, [session, router]);

  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      const res: any = await signIn("credentials", {
        email: userCred?.email,
        password: userCred?.password,
        redirect: false,
      });
      console.log(res, "res");
      if (res?.error) {
        console.log(res?.error, "errro");
        return;
      }
      router.replace("/dashboard");
    } catch (error) {
      console.log("error");
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, name } = e.target;
    setUserCred((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <main className="flex-grow bg-cover bg-login flex items-center justify-end pr-24">
        <div className="flex flex-col items-end w-full">
          {/* Use w-full to occupy full width */}
          <form
            className="flex flex-col items-center mt-12"
            onSubmit={(e) => handleClick(e)}
          >
            {/* Center the form content */}
            <fieldset className="relative box-border border-solid max-w-sm bg-white border border-black rounded-3xl shadow">
              <legend className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] bg-black rounded cursor-pointer p-1 text-white text-center font-medium">
                <button className="px-20" type="submit">
                  Login
                </button>
              </legend>
              <div className="bg-teal rounded-t-3xl p-4 w-[350px]">
                <span className="text-3xl font-semibold text-white">
                  Sign In
                </span>
                <br />
                <span className="text-white text-xs">
                  If Already Registered, You May Login Using
                  <br />
                  Password or OTP. Else, Please Sign Up.
                </span>
              </div>

              {/* Form Fields */}
              <div className="p-4 flex flex-col gap-5">
                <div className="flex items-center border-b-[1px] px-2 mt-6">
                  <Image
                    className=""
                    src={emailIcon}
                    height={15}
                    width={15}
                    alt="email-icon"
                  />
                  <input
                    className="border-none text-xs bg-transparent w-[100%] p-2 outline-none appearance-none"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    onChange={(e) => handleChangeInput(e)}
                  />
                </div>
                <div className="flex items-center border-b-[1px] px-2">
                  <Image
                    src={passwordIcon}
                    height={15}
                    width={15}
                    alt="password-icon"
                  />
                  <input
                    className="border-none text-xs bg-transparent w-[100%] p-2 outline-none appearance-none"
                    type="password"
                    required
                    placeholder="Password"
                    name="password"
                    onChange={(e) => handleChangeInput(e)}
                  />
                </div>

                <div className="flex justify-between mb-16">
                  <div className="text-xs flex cursor-pointer justify-center">
                    <span className="text-teal flex gap-2 font-semibold">
                      <input type="checkbox" className="accent-teal" />
                      <span>Remember me</span>
                    </span>
                  </div>
                  <Link
                    href="/forgotpassword"
                    className="text-xs font-semibold text-teal cursor-pointer"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
