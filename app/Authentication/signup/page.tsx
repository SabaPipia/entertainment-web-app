"use client";

import React, { useState, ChangeEvent, FormEventHandler } from "react";
import { CustomButton, InputBar } from "@/components";

import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import ErrorText from "@/components/ui/Auth/ErrorText";
import Footer from "@/components/ui/Auth/Footer";
import Header from "@/components/ui/Auth/Header";
import { signUp } from "../helper";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");
  const [complete, setComplete] = useState("");

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
    {
      value: rePassword,
      name: "rePassword",
      type: "password",
      placeHolder: "Repeat Password",
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setRePassword(e.target.value),
    },
  ];

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    signUp({
      e,
      email,
      password,
      setError,
      setComplete,
      rePassword,
    });
  };

  return (
    <div className="flex flex-col gap-20 w-full h-full justify-center items-center">
      <Image src={logo} alt="logo" />

      <div className="text-white bg-semiDarkBlue p-8 flex flex-col gap-6 w-80 rounded-lg md:w-96">
        <Header title="Sign Up" />
        <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
          {inputs.map((input) => {
            return (
              <InputBar
                key={input.name}
                value={input.value}
                name={input.name}
                type={input.type || input.name}
                placeHolder={input.placeHolder}
                onChange={input.onChange}
              />
            );
          })}
          <CustomButton type="submit">Create an account</CustomButton>
          <ErrorText complete={complete} error={error} />
        </form>
        <Footer href="/login" />
      </div>
    </div>
  );
}

export default SignUp;
