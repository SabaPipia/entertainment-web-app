"use client";

import { auth } from "@/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  // router.push("/Authentication/login");
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/home");
      } else {
        router.push("/Authentication/login");
      }
    });
    return () => {
      listen();
    };
  }, []);

  return <main></main>;
}
