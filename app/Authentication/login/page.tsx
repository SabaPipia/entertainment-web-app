"use client";

import React, { ChangeEvent, FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import InputBar from "@/components/InputBar";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";
import { Dispatch } from "redux";
import { signIn } from "../helper";
import Header from "@/components/ui/Auth/Header";
import ErrorText from "@/components/ui/Auth/ErrorText";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch: Dispatch = useDispatch();
  const router = useRouter();

  const inputs = [
    {
      value: email,
      name: "email",
      placeHolder: "Email adress",
      onChange: (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    },
    {
      value: password,
      name: "password",
      placeHolder: "Password",
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value),
    },
  ];

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    signIn({
      e,
      email,
      password,
      setError,
      dispatch,
      router,
    });
  };

  return (
    <div className="flex flex-col gap-20 w-full h-full justify-center items-center">
      <Image src={logo} alt="logo" />
      <div className="text-white bg-semiDarkBlue p-8 flex flex-col gap-6 w-80 rounded-lg md:w-96">
        <Header title="Login" />
        <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
          {inputs.map((input) => {
            return (
              <InputBar
                value={input.value}
                name={input.name}
                type={input.name}
                placeHolder={input.placeHolder}
                onChange={input.onChange}
              />
            );
          })}
          <CustomButton type="submit">Login to your account</CustomButton>
          <ErrorText complete={""} error={error} />
        </form>
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
