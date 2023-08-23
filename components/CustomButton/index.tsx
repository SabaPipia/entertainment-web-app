import { ButtonProps } from "@/types";
import React from "react";

function CustomButton({ children }: ButtonProps) {
  return <button className="bg-customRed p-3 rounded-md">{children}</button>;
}

export default CustomButton;
