import { useEffect, useState } from "react";
import { auth } from "@/firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

function AuthDetails() {
  // TODO:usestate types
  const router = useRouter();
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/home");
      } else {
        router.push("/");
      }
    });
    return () => {
      listen();
    };
  }, []);

  return;
}

export default AuthDetails;
