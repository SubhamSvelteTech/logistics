"use client";
import React, { useState } from "react";
import emailIcon from "@Icons/email.svg";
import passwordIcon from "@Icons/password.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import Toaster from "@/services/utils/toaster/Toaster";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { setCookie } from "cookies-next";

const Login = () => {
  const [userCred, setUserCred] = useState({ email: "", password: "" });
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { data: session, status } = useSession();

  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      const res: any = await signIn("credentials", {
        email: userCred?.email,
        password: userCred?.password,
        redirect: false,
      });
      if (res?.ok) {
        Toaster("success", "LoggedIn Successfully");
        if (session && status === "authenticated") {
          setCookie("access_token", session?.user.accessToken);
          setCookie("refresh_token", session?.user.refreshToken);
        }
        router.replace("/dashboard");
      } else {
        Toaster("error", "Invalid Credentials!");
      }
      console.log(res, "res");
      // if (res?.error) {
      //   Toaster("error",res?.error); // Show the error message
      // }
      // router.replace("/dashboard");
    } catch (error) {
      console.log(error, "bvcvbvcbvbvbvbvbv");
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
                <div className="relative z-0 w-full mb-5 border-b-[1px]">
                  <div className="absolute inset-y-0 flex items-center px-2 pointer-events-none">
                    <Image
                      height={14}
                      width={14}
                      src={passwordIcon}
                      alt="key_icon"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      autoComplete="off"
                      onChange={(e) => handleChangeInput(e)}
                      id="floating_password"
                      className="border-none text-xs bg-transparent w-[100%] p-2 px-8 outline-none appearance-none"
                      placeholder="Password"
                    />
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center ">
                    {!showPassword ? (
                      <Eye
                        onClick={() => setShowPassword(!showPassword)}
                        className="cursor-pointer mr-2 text-[#8f8f8f] hover:text-[#000]"
                      />
                    ) : (
                      <EyeSlash
                        onClick={() => setShowPassword(!showPassword)}
                        className="cursor-pointer mr-2 text-[#8f8f8f] hover:text-[#000]"
                      />
                    )}
                  </div>
                </div>

                <div className="flex justify-between mb-16">
                  <div className="text-xs flex cursor-pointer justify-center">
                    <span className="text-teal flex gap-2 font-semibold">
                      <input type="checkbox" className="accent-teal" />
                      <span>Remember me</span>
                    </span>
                  </div>
                  <Link
                    href="/forgot-password"
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
