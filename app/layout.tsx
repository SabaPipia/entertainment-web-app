"use client";

import "./globals.css";

import { Provider } from "react-redux";
import { store } from "@/store/authReducer";

import type { Metadata } from "next";

import { Inter } from "next/font/google";
import RouteGuard from "./RouteGuard";
import Navigation from "@/components/Navigation";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${inter.className} bg-darkBlue`}>
        <Provider store={store}>
          <RouteGuard>
            <div className="flex">
              <div className="">
                {pathname.includes("Authentication") ? null : <Navigation />}
              </div>
              <div className="w-full m-6">{children}</div>
            </div>
          </RouteGuard>
        </Provider>
      </body>
    </html>
  );
}
