"use client";

import React, { useState, ChangeEvent, FormEventHandler } from "react";
import { CustomButton, InputBar } from "@/components";

import ErrorText from "@/components/ui/Auth/ErrorText";
import Footer from "@/components/ui/Auth/Footer";
import Header from "@/components/ui/Auth/Header";
import { signUp } from "../helper";
import { useRouter } from "next/navigation";
import { SpinningCircles } from "react-loading-icons";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");
  const [complete, setComplete] = useState("");
  const [loading, setLoading] = useState(false);

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

  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    signUp({
      e,
      email,
      password,
      setError,
      setComplete,
      rePassword,
      setLoading,
      router,
    });
  };

  return (
    <>
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
        <CustomButton type="submit" loading={loading}>
          Create an account
        </CustomButton>
      </form>
      <ErrorText complete={complete} error={error} />
      <Footer href="login" />
    </>
  );
}

export default SignUp;
