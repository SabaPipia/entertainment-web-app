import { ButtonProps } from "@/types";
import React from "react";
import { SpinningCircles } from "react-loading-icons";

function CustomButton({ onClick, type, children, loading }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-customRed text-white h-12 p-3 rounded-md hover:bg-white hover:text-customRed"
    >
      {loading ? (
        <div className="h-full w-full flex justify-center">
          <SpinningCircles className="h-full" fill="#888" />
        </div>
      ) : (
        children
      )}
    </button>
  );
}

export default CustomButton;
