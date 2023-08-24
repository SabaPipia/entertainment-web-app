"use client";

import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";
import { clearUser } from "@/store/authActions";
import { useDispatch } from "react-redux";

function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(clearUser());
        router.push("/Authentication/login");
      })
      .catch((err) => {});
  };
  return (
    <div>
      <h1 className="text-white">If u are seeing this u made it</h1>
      <button onClick={userSignOut}>sign out</button>
    </div>
  );
}

export default Home;
