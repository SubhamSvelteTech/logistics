import BreadCrumb from "@/app/components/breadcrumb/BreadCrumb";
import React from "react";

const YourOrder = () => {
  return (
    <>
      <div className="py-4">
        <BreadCrumb title="Your Cart" />
        <div className="grid grid-cols-2">
          <div className="mt-4">
            <li className="text-teal text-lg font-bold">General Blood Test</li>
          </div>
          <div className="border px-8">
            <div className="flex justify-center py-4">
              <span className="font-bold">Payment Total</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-lg">
                <p className="font-bold text-lg">Bill Details</p>
                <p className="mt-2">Item Total</p>
                <p className="mt-2">Delivery Fee | 2.0 kms</p>
                <p className="mt-2">Taxes and Charges</p>
                <p className="text-lg font-bold py-4">To Pay</p>
              </div>
              <div>
                <p className="font-bold text-green-600">Payment Done</p>
                <p className="mt-2 text-lg">5008</p>
                <p className="mt-2 text-lg">50</p>
                <p className="mt-2 text-lg">37.55</p>
                <p className="text-lg font-bold py-4">5132</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourOrder;
