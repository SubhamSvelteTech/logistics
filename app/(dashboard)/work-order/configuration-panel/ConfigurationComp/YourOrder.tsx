import BreadCrumb from "@/app/components/breadcrumb/BreadCrumb";
import React from "react";

const YourOrder = () => {
  return (
    <>
      <div className="py-4">
        <BreadCrumb title="Your Cart" />
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="mt-4">
            <li className="text-teal text-md font-bold">General Blood Test</li>
          </div>
          <div className="border px-8 text-sm">
            <div className="flex justify-center py-4">
              <span className="font-bold">Payment Total</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm">
                <p className="font-bold">Bill Details</p>
                <p className="mt-2">Item Total</p>
                <p className="mt-2">Delivery Fee | 2.0 kms</p>
                <p className="mt-2">Taxes and Charges</p>
                <p className="text-lg font-bold py-4">To Pay</p>
              </div>
              <div>
                <p className="font-bold text-green-600">Payment Done</p>
                <p className="mt-2 text-sm">5008</p>
                <p className="mt-2 text-sm">50</p>
                <p className="mt-2 text-sm">37.55</p>
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
