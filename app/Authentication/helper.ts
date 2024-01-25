import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { auth } from "@/firebase/firebase";
import { setUser } from "@/store/authActions";

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

type AppDispatch = Dispatch<any>;

type Router = {
  push: (url: string) => void;
};

export const signIn = ({
  e,
  email,
  password,
  setError,
  dispatch,
  router,
  setLoading,
}: {
  e: FormEvent;
  email: string;
  password: string;
  setError: Dispatch<SetStateAction<string>>;
  dispatch: AppDispatch;
  router: Router;
  setLoading: Dispatch<SetStateAction<boolean>>;
}) => {
  e.preventDefault();
  setLoading(true);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      dispatch(setUser(userCredential));
      router.push("/home");
      // setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
      switch ([err][0].code) {
        case "auth/user-not-found":
          setError("Email address not registered.");
          break;
        case "auth/invalid-email":
          setError("Enter a valid email.");
          break;
        case "auth/wrong-password":
          setError("Incorrect password, try again");
          break;
        default:
          break;
      }
    });
};
