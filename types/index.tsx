import { ButtonHTMLAttributes, ReactNode } from "react";

export interface InputBarProps {
  placeHolder: string;
  name: string;
  type: string;
  value: any;
  onChange: (e: any) => void;
}
export interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}
export interface AuthProviderProps {
  children: ReactNode;
}
export interface Inputs {
  email: string;
  password: string;
  rePassword: string;
}
