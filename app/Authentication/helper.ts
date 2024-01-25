import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { Dispatch, FormEvent, SetStateAction } from "react";
import { auth } from "@/firebase/firebase";

export const signUp = ({
  e,
  email,
  password,
  setError,
  setComplete,
  rePassword,
}: {
  e: FormEvent;
  email: string;
  password: string;
  setError: Dispatch<SetStateAction<string>>;
  setComplete: Dispatch<SetStateAction<string>>;
  rePassword: string;
}) => {
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
