import React from "react";
import Header from "../common/Header";
import PhoneInput from "react-phone-input-2";

const page = () => {
  return (
    <>
      <div className="mx-auto">
        <Header />
        <div className="justify-end tabview:flex grid grid-cols-1 md:grid-cols-2 bg-login h-[100vh] bg-center bg-no-repeat bg-cover w-full">
          <div className="text-center m-auto hidden md:block tabview:hidden"></div>
          <div className="m-auto">
            <form>
              <fieldset className=" relative box-border border-solid max-w-sm m-auto bg-white border border-black rounded-3xl shadow dark:bg-gray-800 dark:border-blue">
                <legend
                  className={`absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] bg-black rounded p-1 text-white text-center font-medium`}
                >
                  <button
                    className={`px-8 tabview:px-5`}
                    type="submit"
                  >
                    Send OTP
                  </button>
                </legend>
                <div className="bg-teal rounded-t-3xl p-4 w-[400px] tabview:w-[350px]">
                  <span className="text-3xl font-semibold text-white">
                    Forgot Password
                  </span>
                  <br />
                  <span className="text-white text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <br /> Rerum, neque.
                  </span>
                </div>

                <div className="flex flex-col z-0 w-full mb-5 group ml-7 tabview:ml-3 mt-12">
                  <p className="font-medium mb-4">Mobile number</p>
                  <div className="border-b w-[75%] mb-12">
                    <input type="tel"/>
                    {/* <PhoneInput
                      country={"in"}
                      countryCodeEditable={false}
                      //   value={user.mobileNumber}

                      inputStyle={{
                        height: "30px",
                        width: "90%",
                      }}
                    /> */}
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
