"use client";
import React from "react";
import { CustomButtonProps } from "@/Interfaces/Utils/CustomButton";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  disabled,
}: CustomButtonProps) => {
  return (
    <button
      disabled={disabled}
      type="button"
      className={`custom-btn ${containerStyles} cursor-pointer ${
        disabled && "opacity-[0.5]"
      }`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
