import React, { ReactNode } from "react";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-20 w-full h-full justify-center items-center">
      <Image src={logo} alt="logo" />
      <div className="text-white bg-semiDarkBlue p-8 flex flex-col gap-6 w-80 rounded-lg md:w-96">
        {children}
      </div>
    </div>
  );
}
