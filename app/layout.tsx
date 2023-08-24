"use client";

import "./globals.css";

import { Provider } from "react-redux";
import { store } from "@/store/authReducer";

import type { Metadata } from "next";

import { Inter } from "next/font/google";
import RouteGuard from "./RouteGuard";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "entertainment-app",
  description: "this is movie and TV Shows website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-darkBlue h-screen`}>
        <Provider store={store}>
          <RouteGuard>{children}</RouteGuard>
        </Provider>
      </body>
    </html>
  );
}
