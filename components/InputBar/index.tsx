import { InputBarProps } from "@/types";
import React, { ChangeEvent } from "react";

function InputBar({ onChange, value, name, type, placeHolder }: InputBarProps) {
  return (
    <input
      className="bg-transparent p-4 border-solid border-greyishBlue border-b-2  focus:outline-none"
      value={value}
      name={name}
      type={type}
      placeholder={placeHolder}
      onChange={(e) => onChange(e)}
    />
  );
}

export default InputBar;
