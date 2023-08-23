import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import InputBar from "@/components/InputBar";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";

function Login() {
  return (
    <div className="flex flex-col gap-20 w-full h-full justify-center items-center">
      <Image src={logo} alt="logo" />
      <div className="text-white bg-semiDarkBlue p-8 flex flex-col gap-6 w-80 rounded-lg md:w-96">
        <h3>Login</h3>
        <InputBar placeHolder="Email adress" />
        <InputBar placeHolder="Password" />
        <CustomButton>Login to your account</CustomButton>
        <p className="text-sm text-center">
          Don't have an account?{" "}
          <Link className="text-customRed" href="/Authentication/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
