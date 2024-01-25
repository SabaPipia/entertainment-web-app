"use client";

import React, { ChangeEvent, FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import InputBar from "@/components/InputBar";

import Link from "next/link";
import { Dispatch } from "redux";
import { signIn } from "../helper";
import Header from "@/components/ui/Auth/Header";
import ErrorText from "@/components/ui/Auth/ErrorText";
import Footer from "@/components/ui/Auth/Footer";
import CustomButton from "@/components/ui/Auth/SubmitButton";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
      setLoading,
    });
  };

  return (
    <>
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
        <CustomButton type="submit" loading={loading}>
          Login to your account
        </CustomButton>
      </form>
      <ErrorText complete={""} error={error} />
      <Footer href="signup" />
    </>
  );
}

export default Login;
