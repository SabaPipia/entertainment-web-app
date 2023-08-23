import { ButtonProps } from "@/types";
import React from "react";

function CustomButton({ onClick, type, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-customRed p-3 rounded-md"
    >
      {children}
    </button>
  );
}

export default CustomButton;
