"use client";

import React, {
  useState,
  FormEvent,
  ChangeEventHandler,
  ChangeEvent,
} from "react";
import { CustomButton, InputBar } from "@/components";
import { auth } from "@/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import Link from "next/link";
import ErrorTextAuth from "@/components/ui/ErrorTextAuth";

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

  const signUp = (e: FormEvent) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        setComplete("Registration successful!");
      })
      .catch((err) => {
        switch ([err][0].code) {
          case "auth/invalid-email":
            setError("Enter a valid email.");
            break;
          case "auth/email-already-in-use":
            setError("This email address is already registered.");
            break;
          default:
            break;
        }
        if (password != rePassword) {
          setError("Passwords do not match");
        }
      });
  };

  return (
    <div className="flex flex-col gap-20 w-full h-full justify-center items-center">
      <Image src={logo} alt="logo" />

      <div className="text-white bg-semiDarkBlue p-8 flex flex-col gap-6 w-80 rounded-lg md:w-96">
        <h3 className="text-3xl">Sign Up</h3>
        <form className="w-full flex flex-col gap-5" onSubmit={signUp}>
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
          <ErrorTextAuth complete={complete} error={error} />
        </form>
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
