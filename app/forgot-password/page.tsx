"use client";
import React, { useState } from "react";
import emailIcon from "@Icons/email.svg";
import passwordIcon from "@Icons/password.png";
import Image from "next/image";
import Link from "next/link";
import Header from "../common/Header";
import PhoneInput from "react-phone-input-2";
import axiosInstance from "@/services/utils/hooks/useApi";
import { FORGOT_PASSWORD } from "../constants/apiEndpoints";

const page = () => {
  const [value, setValue] = useState("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      email: value,
    };
    const res = await axiosInstance.post(`${FORGOT_PASSWORD}`, payload);
  };

  return (
    <>
      <Header />

      <div className="justify-end tabview:flex grid grid-cols-1 md:grid-cols-2 bg-login  h-screen bg-center bg-no-repeat bg-cover w-full">
        <div className="text-center m-auto hidden md:block tabview:hidden"></div>

        <div className="m-auto">
          <form
            className="flex flex-col items-center mt-12"
            onSubmit={(e) => handleSubmit(e)}
          >
            {/* Center the form content */}
            <fieldset className="relative box-border border-solid max-w-sm bg-white border border-black rounded-3xl shadow">
              <legend className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] bg-black rounded cursor-pointer p-1 text-white text-center font-medium">
                <button className="px-12 text-sm" type="submit">
                  Submit
                </button>
              </legend>
              <div className="bg-teal rounded-t-3xl p-4 w-[350px]">
                <span className="text-xl font-semibold text-white">
                  Forgot Password
                </span>
                <br />
                {/* <span className="text-white text-xs">
                  If Already Registered, You May Login Using
                  <br />
                  Password or OTP. Else, Please Sign Up.
                </span> */}
              </div>

              {/* Form Fields */}
              <div className="px-6 pb-12 flex flex-col gap-5">
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
                    value={value}
                    required
                    onChange={(e) => handleChangeInput(e)}
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
