import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { CustomButton, InputBar } from "@/components";
import Link from "next/link";

function SignUp() {
  return (
    <div className="flex flex-col gap-20 w-full h-full justify-center items-center">
      <Image src={logo} alt="logo" />
      <div className="text-white bg-semiDarkBlue p-8 flex flex-col gap-6 w-80 rounded-lg md:w-96">
        <h3 className="text-3xl">Sign Up</h3>
        <InputBar placeHolder="Email adress" />
        <InputBar placeHolder="Password" />
        <InputBar placeHolder="Repeat Password" />
        <CustomButton>Create an account</CustomButton>
        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link className="text-customRed" href="/Authentication/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
