import { ReactNode } from "react";

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
  loading: boolean;
}
export interface AuthProviderProps {
  children: ReactNode;
}
export interface Inputs {
  email: string;
  password: string;
  rePassword: string;
}
export interface AuthProps {
  children: ReactNode;
}
export interface RouteGuardProps {
  children: ReactNode;
}
export interface DataTypes {
  title?: string;
  thumbnail?: {
    trending?: {
      small?: string;
      large?: string;
    };
    regular?: {
      small?: string;
      medium?: string;
      large?: string;
    };
  };
  year?: number;
  category?: string;
  rating?: string;
  isBookmarked?: boolean;
  isTrending?: boolean;
}
export interface CarouselProps {
  item: DataTypes[];
}
export interface CardProps {
  item: DataTypes[];
}

export interface DataContextTypes {
  data: DataTypes[];
  setData: (data: DataTypes[]) => void;
}

export interface InputProps {
  isSearching: boolean;
  setSearching: (searching: boolean) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
}
