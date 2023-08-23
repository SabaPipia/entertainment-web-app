"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import InputBar from "@/components/InputBar";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const signIn = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => router.push("/home"))
      .catch((err) => setError(err));
    if (error.includes("user-not-found")) {
      console.log("user not found");
    }
  };
  return (
    <div className="flex flex-col gap-20 w-full h-full justify-center items-center">
      <Image src={logo} alt="logo" />
      <div className="text-white bg-semiDarkBlue p-8 flex flex-col gap-6 w-80 rounded-lg md:w-96">
        <h3>Login</h3>
        <form className="w-full flex flex-col gap-5" onSubmit={signIn}>
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
          <CustomButton type="submit">Create an account</CustomButton>
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
