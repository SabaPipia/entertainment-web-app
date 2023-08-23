import { InputBarProps } from "@/types";
import React from "react";

function InputBar({ placeHolder }: InputBarProps) {
  return (
    <input
      className="bg-transparent p-4 border-solid border-greyishBlue border-b-2"
      type="text"
      placeholder={placeHolder}
    />
  );
}

export default InputBar;
