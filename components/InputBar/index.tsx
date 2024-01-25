import { InputBarProps } from "@/types";
import React from "react";

function InputBar({
  onChange,
  value,
  name,
  type,
  placeHolder,
  icon,
}: InputBarProps) {
  return (
    <div className="border-solid border-greyishBlue border-b-2 flex items-center">
      <input
        className="bg-transparent p-4 focus:outline-none"
        value={value}
        name={name}
        type={type}
        placeholder={placeHolder}
        onChange={(e) => onChange(e)}
      />
      {type === "email" ? null : icon}
    </div>
  );
}

export default InputBar;
