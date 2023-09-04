"use client";

import React, { useState } from "react";
import { CustomButton, InputBar } from "@/components";
import { auth } from "@/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import Link from "next/link";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");

  const signUp = (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {})
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
          <InputBar
            value={email}
            name="email"
            type="email"
            placeHolder="Email adress"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputBar
            value={password}
            name="password"
            type="password"
            placeHolder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputBar
            value={rePassword}
            name="rePassword"
            type="password"
            placeHolder="Repeat Password"
            onChange={(e) => setRePassword(e.target.value)}
          />
          <CustomButton type="submit">Create an account</CustomButton>
          <p className="text-customRed text-xs text-center">{error}</p>
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
