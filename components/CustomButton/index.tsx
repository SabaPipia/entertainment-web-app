import { ButtonProps } from "@/types";
import React from "react";

function CustomButton({ onClick, type, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-customRed text-white p-3 rounded-md hover:bg-white hover:text-customRed"
    >
      {children}
    </button>
  );
}

export default CustomButton;
