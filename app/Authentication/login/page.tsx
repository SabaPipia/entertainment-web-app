"use client";

import React, { ChangeEvent, FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import InputBar from "@/components/InputBar";
import { Dispatch } from "redux";
import { signIn } from "../helper";
import Header from "@/components/ui/Auth/Header";
import ErrorText from "@/components/ui/Auth/ErrorText";
import Footer from "@/components/ui/Auth/Footer";
import CustomButton from "@/components/ui/Auth/SubmitButton";
import { IoEye, IoEyeOff } from "react-icons/io5";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const dispatch: Dispatch = useDispatch();
  const router = useRouter();

  const inputs = [
    {
      value: email,
      name: "email",
      type: "email",
      placeHolder: "Email adress",
      onChange: (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    },
    {
      value: password,
      name: "password",
      type: isPasswordVisible ? "text" : "password",
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
              type={input.type}
              placeHolder={input.placeHolder}
              onChange={input.onChange}
              icon={
                <div
                  className="cursor-pointer"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  {isPasswordVisible ? <IoEye /> : <IoEyeOff />}
                </div>
              }
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
