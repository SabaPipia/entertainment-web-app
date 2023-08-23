"use client";

import { useRouter } from "next/navigation";
import React from "react";
import app from "@/firebase/firebase";
import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";

function Home() {
  const router = useRouter();
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        router.push("/Authentication/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1 className="text-white">If u are seeing this u made it</h1>
      <button onClick={userSignOut}>sign out</button>
    </div>
  );
}

export default Home;
